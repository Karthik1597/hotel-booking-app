import React, { useEffect } from "react";
import "../styles/BookingSuccess.css";

const BookingSuccess = () => {
  useEffect(() => {
    const saveBooking = async () => {
      const bookingData = JSON.parse(localStorage.getItem("bookingData"));

      if (!bookingData) return;

      try {
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

        localStorage.removeItem("bookingData");
      } catch (error) {
        console.log("Booking save error:", error);
      }
    };

    saveBooking();
  }, []);

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