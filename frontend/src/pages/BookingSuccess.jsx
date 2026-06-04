import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();

  useEffect(() => {
    const saveBooking = async () => {
      const saved = JSON.parse(localStorage.getItem("bookingData"));

      if (!saved) return;

      const finalBooking = {
        ...saved,
        paymentStatus: "Paid",
      };

      try {
        await fetch(
          "https://hotel-booking-api-8ysd.onrender.com/api/bookings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalBooking),
          }
        );

        localStorage.removeItem("bookingData");
      } catch (err) {
        console.log("Save booking error:", err);
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