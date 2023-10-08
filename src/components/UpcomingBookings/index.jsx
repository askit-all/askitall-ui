import { secured } from "api/interceptors";
import CancelSlotButton from "components/CancelSlotButton";
import ReSlotButton from "components/ReScheduleSlotButton";
import SlotButton from "components/ScheduleSlotButton";
import React, { useState, useEffect } from "react";

const UpcomingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // Function to fetch bookings from the API
  const fetchBookings = async () => {
    let url = "/slots/get-bookings";
    let payload = {
      userId: userData.userid ? userData.userid : userData.id,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.bookings && response.data.bookings.length) {
        response.data.bookings.forEach((ele) => {
          ele["showDate"] = new Date(ele.bookingDate).toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

          ele["startTime"] = ele.slot?.split("-")[1].trimEnd();
        });

        let finalBokings = response.data.bookings.filter(
          (ele) =>
            getTimeDifferenceInMinutes(ele.startTime, ele.bookingDate) >= 0 &&
            ele.status !== "CANCELLED" && ele.status !== "RESCHEDULED"
        );

        setBookings(finalBokings);
      } else {
        setBookings([]);
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

  // useEffect to fetch bookings when the component mounts
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      {bookings && bookings.length ? (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="p-4 rounded-md shadow-md bg-white hover:bg-gray-100 transition duration-300"
            >
              <div className="flex sm:flex-col justify-between items-center">
                <div>
                  {userData.type == "mentee" ? (
                    <p className="">
                      Call With:{" "}
                      <span className="text-lg font-semibold">
                        {booking.mentorName}
                      </span>
                    </p>
                  ) : (
                    <></>
                  )}

                  {userData.type == "mentor" ? (
                    <p className="text-lg font-semibold">
                      Call With:{" "}
                      <span className="text-lg font-semibold">
                        {booking.menteeName}
                      </span>
                    </p>
                  ) : (
                    <></>
                  )}
                  <p className="">
                    Booking Date:{" "}
                    <span className="text-lg font-semibold">
                      {booking.showDate}
                    </span>
                  </p>
                  <p className="">
                    Slot:{" "}
                    <span className="text-lg font-semibold">
                      {booking.slot}
                    </span>
                  </p>

                  {booking.isCallStarted && userData.type == "mentee" ? (
                    <p
                      style={{
                        color: "red",
                        fontWeight: "500",
                        fontSize: "20px",
                      }}
                    >
                      Call already started
                    </p>
                  ) : (
                    <></>
                  )}

                  <div className="flex gap-3 my-2">
                    {userData.type == "mentee" ? (
                      <ReSlotButton
                        startTime={booking.startTime}
                        booking={booking}
                        slotDate={booking.bookingDate}
                        fetchBookings={fetchBookings}
                      />
                    ) : (
                      <></>
                    )}

                    <CancelSlotButton
                      startTime={booking.startTime}
                      booking={booking}
                      slotDate={booking.bookingDate}
                      fetchBookings={fetchBookings}
                    />
                  </div>
                </div>
                <div>
                  {userData.type == "mentee" && booking.isCallStarted ? (
                    <SlotButton
                      startTime={booking.startTime}
                      bookingId={booking.bookingId}
                      slotDate={booking.bookingDate}
                    />
                  ) : (
                    <></>
                  )}

                  {userData.type == "mentor" ? (
                    <SlotButton
                      startTime={booking.startTime}
                      bookingId={booking.bookingId}
                      slotDate={booking.bookingDate}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* Add other booking details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No Upcoming Bookings</p>
        </>
      )}
    </div>
  );
};

export default UpcomingBookings;
