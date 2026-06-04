import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BookingSuccess.css";

const BookingSuccess = () => {

  const location = useLocation();

  const bookingData = location.state;

  useEffect(() => {

    const saveBooking = async () => {

      if (!bookingData) return;

      await fetch(
        "https://hotel-booking-api-8ysd.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );
    };

    saveBooking();

  }, [bookingData]);

  return (
    <div className="success-page">
      <div className="success-box">

        <h1>🎉 Booking Confirmed!</h1>

        <p>Your payment was successful.</p>
        <p>Booking has been confirmed.</p>

        <button onClick={() => (window.location.href = "/")}>
          Back to Home
        </button>

      </div>
    </div>
  );
};

export default BookingSuccess;