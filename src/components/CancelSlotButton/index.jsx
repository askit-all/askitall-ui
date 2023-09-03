import { secured } from "api/interceptors";
import { useEffect, useState } from "react";

const CancelSlotButton = ({ startTime, booking, slotDate, fetchBookings }) => {
  const [showButton, setShowButton] = useState(false);

  const getTimeDifferenceInMinutes = (slotStartTime) => {
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

  const cancelBooking = () => {
    let url = "/slots/cancel-booking";
    let payload = {
      mentorId: booking.mentorId,
      bookingDate: booking.bookingDate,
      slot: booking.slot,
      bookingId: booking.bookingId,
    };
    secured.post(url, payload).then((response) => {
      fetchBookings();
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDifference = getTimeDifferenceInMinutes(startTime);
      setShowButton(timeDifference > 30);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div>
      {showButton && (
        <button
          className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => cancelBooking()}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default CancelSlotButton;
