import { secured } from "api/interceptors";
import SlotButton from "components/ScheduleSlotButton";
import React, { useState, useEffect } from "react";

const UpcomingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // Function to fetch bookings from the API
  const fetchBookings = async () => {
    let url = "/slots/get-bookings";
    let payload = {
      userId: userData.userid,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.bookings && response.data.bookings.length) {
        response.data.bookings.forEach((ele) => {
          ele["showDate"] = new Date(ele.bookingDate).toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

          ele["startTime"] = ele.slot?.split("-")[0].trimEnd();
          console.log(ele["startTime"]);
        });

        setBookings(response.data.bookings);
      } else {
        setBookings([]);
      }
    });
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
              <p className="text-lg font-semibold">
                Booking ID: {booking.bookingId}
              </p>
              <p>Customer Name: {booking.customerName}</p>
              <p>Booking Date: {booking.showDate}</p>
              <SlotButton startTime={booking.startTime} />
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
