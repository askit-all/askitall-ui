import React, { useEffect, useState } from "react";
import "./modalDeleteBooking.css";
import { secured } from "api/interceptors";
import { toast } from "react-hot-toast";
const RescheduleModal = ({ booking, onConfirm, onCancel }) => {
  const [availableDates, setAvaialableDates] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSlots([]);
    fetchSlots(date);
  };

  const fetchAllSlots = () => {
    let url = "/slots/get-slot-dates";
    let payload = {
      userId: booking.mentorId,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.slotDates && response.data.slotDates.length) {
        setBookings(response.data.slotDates);
      }
    });
  };

  useEffect(() => {
    if (bookings && bookings.length) {
      const groupedData = bookings.reduce((acc, obj) => {
        const key = obj.date;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      let dateKeys = Object.keys(groupedData);
      setAvaialableDates(dateKeys);
    }
  }, [bookings]);

  useEffect(() => {
    fetchAllSlots();
  }, []);

  const fetchSlots = async (date) => {
    let url = "/slots/get-all-slots-by-date";
    let payload = {
      date,
      userId: booking.mentorId,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.slots && response.data.slots.length) {
        let finalSlots = response.data.slots.filter((ele) => !ele.status);
        finalSlots.forEach((ele) => {
          ele["startTime"] = ele.slot?.split("-")[0].trimEnd();
        });

        finalSlots = finalSlots.filter(
          (ele) => getTimeDifferenceInMinutes(ele.startTime, ele.date) >= 0
        );
        setSlots(finalSlots);
      }
    });
  };

  const getTimeDifferenceInMinutes = (slotStartTime, slotDate) => {
    // Parse the time string into hours and minutes
    const [time, period] = slotStartTime.split(" ");
    const [hours, minutes] = time.split(":");

    // Convert to 24-hour format
    let hours24 = parseInt(hours, 10);
    if (period.toLowerCase() === "pm" && hours24 < 12) {
      hours24 += 12;
    }

    // Create the slot start time using the current date and time
    const currentDateTime = new Date();
    const slotStartTime24 = new Date(slotDate);
    slotStartTime24.setHours(hours24, minutes, 0, 0);

    const timeDifference = slotStartTime24 - currentDateTime;
    return timeDifference / (1000 * 60); // Convert to minutes
  };

  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
  };

  const handleReScheduleCall = () => {
    // Create payload and perform the API call to schedule the call
    const payload = {
      mentorId: booking.mentorId,
      bookingId: booking.bookingId,
      previousBookingDate: booking.bookingDate,
      previousSlot: booking.slot,
      newBookingDate: selectedDate,
      newSlot: selectedSlot,
    };
    // Call your API endpoint here to schedule the call using the payload
    let url = "/slots/reschedule-booking";
    secured.post(url, payload).then((response) => {
      // if (response.data.slots && response.data.slots.length) {
      toast.success("Slot booked");
      setSelectedSlot(null);
      fetchSlots(selectedDate);
      // }
    });
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          {/* <div className="flex w-full my-4 flex-col gap-5 justify-evenly items-center bg-white_A700_01 shadow-bs3 p-6"> */}
          <h2 className="text-xl font-semibold">Select a Date:</h2>
          <select
            className="w-full px-4 my-2 border border-gray-300 rounded-md"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
          >
            <option value={null}>Select a date</option>
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {date.split("T")[0]}
              </option>
            ))}
          </select>

          {selectedDate && (
            <div className="w-full">
              <h2 className="text-xl font-semibold">Select a Slot:</h2>
              <select
                className="w-full px-4 my-2 border border-gray-300 rounded-md"
                value={selectedSlot}
                onChange={(e) => handleSlotChange(e.target.value)}
              >
                <option value="">Select a slot</option>
                {slots.map((slot) => (
                  <option key={slot.slot} value={slot.slot}>
                    {slot.slot}
                  </option>
                ))}
              </select>

              {selectedSlot && (
                <div className="flex justify-center">
                  <button
                    className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
                    onClick={() => onConfirm(selectedDate, selectedSlot)}
                  >
                    Reschedule Call
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onCancel}>
            No
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default RescheduleModal;
