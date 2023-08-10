import { secured } from "api/interceptors";
import ModalDeleteBooking from "components/ModalDeleteBooking";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaBan, FaTrashAlt } from "react-icons/fa";

const BookingForm = () => {
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalUnavail, setShowModalUnavail] = useState(false);
  const [singleBooking, setSingleBooking] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });
  const userData = JSON.parse(localStorage.getItem("userData"));
  // const [hasOverlap, setHasOverlap] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleUnavailClick = () => {
    setShowModalUnavail(true);
  };

  const handleUnavailableClick = (index) => {
    let booking = bookings[index];
    let url = "/slots/mark-unavailable";
    let payload = {
      date: booking.date,
      slot: booking.slot,
    };
    secured.post(url, payload).then((response) => {
      toast.success("Slot is unavailable now");
      setFilteredDate(new Date().toISOString());
    });

    setShowModalUnavail(false);
  };

  const handleConfirmDelete = (booking) => {
    // Perform actions for "Yes" confirmation
    let url = "/slots/delete-slot";
    let payload = {
      date: booking.date,
    };
    secured.post(url, payload).then((response) => {
      toast.success("All slots for the date are deleted");
      setFilteredDate(new Date().toISOString());
    });
    // e.g., call your delete slots API
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    // Perform actions for "No" confirmation or if the modal is closed
    setShowModal(false);
  };

  const handleCancelUnavail = () => {
    // Perform actions for "No" confirmation or if the modal is closed
    setShowModalUnavail(false);
  };

  // const checkOverlap = (bookings, updatedBookings) => {
  //   let overlap = false;
  //   let arr = [...bookings, updatedBookings];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       const bookingA = arr[i];
  //       const bookingB = arr[j];

  //       if (bookingA.date === bookingB.date) {
  //         overlap = true;
  //         break;
  //       }
  //     }
  //   }

  //   setHasOverlap(overlap);
  // };

  const handleCreate = (event) => {
    // Handle the update action here

    event.preventDefault();

    const currentDate = new Date();
    const selectedDate = new Date(singleBooking.date);
    const selectedStartTime = new Date(
      `${singleBooking.date}T${singleBooking.startTime}`
    );
    const selectedEndTime = new Date(
      `${singleBooking.date}T${singleBooking.endTime}`
    );

    if (selectedDate.toDateString() === currentDate.toDateString()) {
      // If the selected date is the current date
      const currentTime = currentDate.getTime();
      const selectedStartTimeMs = selectedStartTime.getTime();

      if (selectedStartTimeMs < currentTime) {
        toast.error("Start time cannot be less than the current time.");
        return;
      }

      if (selectedStartTime >= selectedEndTime) {
        // If the selected date is different from the current date
        toast.error("Start time must be before the end time.");
        return;
      }
    } else if (selectedStartTime >= selectedEndTime) {
      // If the selected date is different from the current date
      toast.error("Start time must be before the end time.");
      return;
    }

    if (
      singleBooking.date &&
      singleBooking.startTime &&
      singleBooking.endTime
    ) {
      let startTime = convertToISODateTime(
        singleBooking.date,
        singleBooking.startTime
      );
      let endTime = convertToISODateTime(
        singleBooking.date,
        singleBooking.endTime
      );

      let payload = {
        startTime,
        endTime,
      };
      createSlots(payload);
    } else {
      toast.error("Enter all fields first");
    }
  };

  function convertToISODateTime(userDate, userTime) {
    // Combine the user-provided date and time strings
    const combinedDateTimeString = `${userDate}T${userTime}:00`;
    return combinedDateTimeString;
  }

  const today = new Date();
  const minDate = today.toISOString().substr(0, 10);
  const maxDate = new Date(today.setDate(today.getDate() + 15))
    .toISOString()
    .substr(0, 10);

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setSingleBooking({
      ...singleBooking,
      [field]: value,
    });
    // const currentDate = new Date();
    // const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    // const currentBooking = updatedBookings;

    // Clear conflicting values
    // if (
    //   field === "startTime" &&
    //   currentBooking.endTime &&
    //   (value >= currentBooking.endTime ||
    //     (currentBooking.date === minDate && value < currentTime))
    // ) {
    //   updatedBookings.endTime = "";
    // }

    // if (
    //   field === "endTime" &&
    //   currentBooking.startTime &&
    //   (value <= currentBooking.startTime ||
    //     (currentBooking.date === minDate && value < currentTime))
    // ) {
    //   updatedBookings.startTime = "";
    // }

    // // Validate date range
    // const selectedDate = new Date(currentBooking.date);
    // const minSelectableDate = new Date();
    // minSelectableDate.setDate(minSelectableDate.getDate() - 1); // Allow today as well

    // if (selectedDate < minSelectableDate || selectedDate > maxDate) {
    //   // Clear all values for invalid date
    //   updatedBookings = { date: "", startTime: "", endTime: "" };
    // }

    // checkOverlap(bookings, updatedBookings);
  };

  const createSlots = (payload) => {
    // setLoading(true);
    let url = "/slots/create-slot";
    secured.post(url, payload).then((response) => {
      setSingleBooking({ date: "", startTime: "", endTime: "" });
      fetchAllSlots();
      // setLoading(false);
    });
  };

  const fetchAllSlots = () => {
    // setSingleBooking({ date: "", startTime: "", endTime: "" });
    let url = "/slots/get-all-slots-by-date";
    let payload = {
      date: filteredDate,
      userId: userData.userid,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.slots && response.data.slots.length) {
        response.data.slots.forEach((ele) => {
          const { startTime, endTime } = getTimeIn24HourFormat(ele.slot);
          ele["startTime"] = startTime;
          ele["endTime"] = endTime;
        });

        setBookings(response.data.slots);
      } else {
        setBookings([]);
      }
    });
  };

  function convertTo24HourFormat(time12Hour) {
    const [time, period] = time12Hour.split(" ");
    const [hour, minutes] = time.split(":");
    let hour24 = parseInt(hour, 10);

    if (period === "PM" && hour24 !== 12) {
      hour24 += 12;
    } else if (period === "AM" && hour24 === 12) {
      hour24 = 0;
    }

    return `${hour24.toString().padStart(2, "0")}:${minutes}`;
  }

  function getTimeIn24HourFormat(timeRange) {
    const [startTime, endTime] = timeRange.split(" - ");

    const startTime24 = convertTo24HourFormat(startTime);
    const endTime24 = convertTo24HourFormat(endTime);

    return {
      startTime: startTime24,
      endTime: endTime24,
    };
  }

  const [filteredDate, setFilteredDate] = useState(new Date().toISOString());

  useEffect(() => {
    setBookings([]);
    fetchAllSlots();
  }, [filteredDate]);

  // Function to handle date change
  const handleDateChange = (event) => {
    setFilteredDate(event.target.value);
  };
  return (
    <>
      <div
        className="container mx-auto p-4"
        style={{ height: "calc(100vh - 14.5rem)", overflowY: "auto" }}
      >
        <div className="w-full flex gap-4 my-5 items-center">
          <span className="font-semibold">Filter By : </span>
          <input
            type="date"
            defaultValue={filteredDate.substring(0, 10)}
            onChange={(e) => handleDateChange(e)}
          />
        </div>

        <div className="flex mb-4 md:flex-col gap-5 justify-evenly items-center bg-white_A700_01 shadow-bs p-3">
          <input
            type="date"
            className="mb-2 md:w-full w-full px-4 py-2 border rounded"
            value={singleBooking.date}
            onChange={(e) => handleInputChange(e, "date")}
            min={minDate}
            max={maxDate}
          />
          <input
            type="time"
            className="mb-2 md:w-full w-full px-4 py-2 border rounded"
            value={singleBooking.startTime}
            onChange={(e) => handleInputChange(e, "startTime")}
          />
          <input
            type="time"
            className="mb-2 md:w-full w-full px-4 py-2 border rounded"
            value={singleBooking.endTime}
            onChange={(e) => handleInputChange(e, "endTime")}
          />

          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded`}
            onClick={(e) => handleCreate(e)}
            // disabled={hasOverlap}
          >
            Create
          </button>
        </div>
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="flex mb-4 md:flex-col gap-5 justify-evenly items-center bg-white_A700_01 shadow-bs p-3"
          >
            <input
              type="date"
              className="mb-2 md:w-full w-full px-4 py-2 border rounded"
              defaultValue={booking.date.substring(0, 10)} // Extracting the date part "YYYY-MM-DD"
              onChange={(e) => handleInputChange(e, index, "date")}
              min={minDate}
              readOnly={true}
              max={maxDate}
            />
            <input
              type="time"
              className="mb-2 md:w-full w-full px-4 py-2 border rounded"
              defaultValue={booking.startTime}
              readOnly={true}
              onChange={(e) => handleInputChange(e, index, "startTime")}
            />
            <input
              type="time"
              className="mb-2 md:w-full w-full px-4 py-2 border rounded"
              defaultValue={booking.endTime}
              readOnly={true}
              onChange={(e) => handleInputChange(e, index, "endTime")}
            />

            <div className="flex justify-between items-center">
              {booking.status ? (
                <></>
              ) : (
                <FaTrashAlt
                  style={{ height: "2rem", width: "4rem", cursor: "pointer" }}
                  onClick={() => handleDeleteClick()}
                  title="Delete"
                />
              )}
              {showModal && (
                <ModalDeleteBooking
                  message="Are you sure you want to delete all slots for this date?"
                  index={index}
                  onConfirm={() => handleConfirmDelete(booking)}
                  onCancel={() => handleCancelDelete()}
                />
              )}

              {booking.status ? (
                <></>
              ) : (
                <FaBan
                  style={{ height: "2rem", width: "4rem", cursor: "pointer" }}
                  onClick={() => handleUnavailClick()}
                  title="Unavailable"
                />
              )}

              {showModalUnavail && (
                <ModalDeleteBooking
                  message="Are you sure you want to make this slot unavailable?"
                  onConfirm={() => handleUnavailableClick(index)}
                  onCancel={() => handleCancelUnavail()}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookingForm;
