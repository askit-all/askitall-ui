import React, { useState, useEffect } from "react";

const UpcomingBookings = () => {
  const [bookings, setBookings] = useState([]);

  // Function to fetch bookings from the API
  const fetchBookings = async () => {
    try {
      const response = await fetch("YOUR_BOOKINGS_API_ENDPOINT");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
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
              <p className="text-lg font-semibold">Booking ID: {booking.id}</p>
              <p>Customer Name: {booking.customerName}</p>
              <p>Booking Date: {booking.bookingDate}</p>
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
