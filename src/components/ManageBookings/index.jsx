import React, { useState } from "react";

const BookingForm = () => {
  const [bookings, setBookings] = useState([
    { date: "", fromTime: "", toTime: "" },
  ]);
  const [hasOverlap, setHasOverlap] = useState(false);

  const addRow = () => {
    setBookings([...bookings, { date: "", fromTime: "", toTime: "" }]);
  };

  const deleteRow = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings.splice(index, 1);
    setBookings(updatedBookings);
    checkOverlap(updatedBookings);
  };

  const checkOverlap = (updatedBookings) => {
    let overlap = false;

    for (let i = 0; i < updatedBookings.length; i++) {
      for (let j = i + 1; j < updatedBookings.length; j++) {
        const bookingA = updatedBookings[i];
        const bookingB = updatedBookings[j];

        if (
          bookingA.date === bookingB.date &&
          ((bookingA.fromTime >= bookingB.fromTime &&
            bookingA.fromTime < bookingB.toTime) ||
            (bookingA.toTime > bookingB.fromTime &&
              bookingA.toTime <= bookingB.toTime))
        ) {
          overlap = true;
          break;
        }
      }
    }

    setHasOverlap(overlap);
  };

  const handleUpdate = () => {
    // Handle the update action here
    console.log(bookings);
  };

  const today = new Date();
  const minDate = today.toISOString().substr(0, 10);
  const maxDate = new Date(today.setDate(today.getDate() + 15))
    .toISOString()
    .substr(0, 10);

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const updatedBookings = [...bookings];
    updatedBookings[index][field] = value;

    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    const currentBooking = updatedBookings[index];

    // Clear conflicting values
    if (
      field === "fromTime" &&
      currentBooking.toTime &&
      (value >= currentBooking.toTime ||
        (currentBooking.date === minDate && value < currentTime))
    ) {
      updatedBookings[index].toTime = "";
    }

    if (
      field === "toTime" &&
      currentBooking.fromTime &&
      (value <= currentBooking.fromTime ||
        (currentBooking.date === minDate && value < currentTime))
    ) {
      updatedBookings[index].fromTime = "";
    }

    // Validate date range
    const selectedDate = new Date(currentBooking.date);
    const minSelectableDate = new Date();
    minSelectableDate.setDate(minSelectableDate.getDate() - 1); // Allow today as well

    if (selectedDate < minSelectableDate || selectedDate > maxDate) {
      // Clear all values for invalid date
      updatedBookings[index] = { date: "", fromTime: "", toTime: "" };
    }

    setBookings(updatedBookings);
    checkOverlap(updatedBookings);
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{ height: "calc(100vh - 14.5rem)", overflowY: "auto" }}
    >
      <div className="flex flex-wrap justify-between mb-3">
        <h2 className="text-xl w-full text-center font-bold mb-4">
          Manage Bookings
        </h2>
        {bookings && bookings.length > 5 ? (
          <div className="flex flex-wrap w-full items-center justify-between">
            <button
              className={`mb-2 sm:mb-0 px-4 py-2 bg-green-500 text-white rounded ${
                hasOverlap ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={addRow}
              disabled={hasOverlap}
            >
              Add Row
            </button>

            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                hasOverlap ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleUpdate}
              disabled={hasOverlap}
            >
              Update
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {bookings.map((booking, index) => (
        <div
          key={index}
          className="flex mb-4 md:flex-col gap-5 justify-evenly items-center bg-white_A700_01 shadow-bs p-3"
        >
          <input
            type="date"
            className="mb-2 md:w-full w-full px-4 py-2 border rounded"
            value={booking.date}
            onChange={(e) => handleInputChange(e, index, "date")}
            min={minDate}
            max={maxDate}
          />
          <input
            type="time"
            className="mb-2 md:w-full w-full px-4 py-2 border rounded"
            value={booking.fromTime}
            onChange={(e) => handleInputChange(e, index, "fromTime")}
          />
          <input
            type="time"
            className="mb-2 md:w-full w-full px-4 py-2 border rounded"
            value={booking.toTime}
            onChange={(e) => handleInputChange(e, index, "toTime")}
          />

          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => deleteRow(index)}
          >
            Delete
          </button>
        </div>
      ))}

      <div className="flex flex-wrap items-center justify-between">
        <button
          className={`mb-2 sm:mb-0 px-4 py-2 bg-green-500 text-white rounded ${
            hasOverlap ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={addRow}
          disabled={hasOverlap}
        >
          Add Row
        </button>

        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            hasOverlap ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleUpdate}
          disabled={hasOverlap}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
