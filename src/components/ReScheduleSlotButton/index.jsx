import { secured } from "api/interceptors";
import RescheduleModal from "components/RescheduleModal";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ReSlotButton = ({ startTime, booking, slotDate, fetchBookings }) => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const rescheduleCall = (selectedDate, selectedSlot) => {
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
      if (response.data) {
        toast.success("Slot booked");
        setShowModal(false);
        fetchBookings();
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDifference = getTimeDifferenceInMinutes(startTime);
      setShowButton(timeDifference > 60);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    // Perform actions for "No" confirmation or if the modal is closed
    setShowModal(false);
  };

  return (
    <div>
      {showButton && (
        <button
          className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => handleClick()}
        >
          Reschedule Call
        </button>
      )}

      {showModal && (
        <RescheduleModal
          booking={booking}
          onConfirm={(selectedDate, selectedSlot) =>
            rescheduleCall(selectedDate, selectedSlot)
          }
          onCancel={() => handleCancelDelete()}
        />
      )}
    </div>
  );
};

export default ReSlotButton;
