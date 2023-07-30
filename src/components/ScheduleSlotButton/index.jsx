import React, { useState, useEffect } from "react";

const SlotButton = ({ startTime }) => {
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
    const slotStartTime24 = new Date(currentDateTime);
    slotStartTime24.setHours(hours24, minutes, 0, 0);

    const timeDifference = slotStartTime24 - currentDateTime;
    return timeDifference / (1000 * 60); // Convert to minutes
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
      {showButton && <button>Button</button>}
      {!showButton && <div>Button will appear when there are 5 mins left</div>}
    </div>
  );
};

export default SlotButton;
