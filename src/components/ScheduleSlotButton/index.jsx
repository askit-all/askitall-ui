import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SlotButton = ({ startTime, bookingId }) => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

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
    const slotStartTime24 = new Date(currentDateTime);
    slotStartTime24.setHours(hours24, minutes, 0, 0);

    const timeDifference = slotStartTime24 - currentDateTime;
    return timeDifference / (1000 * 60); // Convert to minutes
  };

  const gotoCall = () => {
    navigate(`/call/${bookingId}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDifference = getTimeDifferenceInMinutes(startTime);
      setShowButton(timeDifference <= 5 && timeDifference >= 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div>
      {/* {showButton && ( */}
        <button
          className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => gotoCall()}
        >
          Attend Call
        </button>
      {/* )} */}
    </div>
  );
};

export default SlotButton;
