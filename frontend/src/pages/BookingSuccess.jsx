import React from "react";
import "../styles/BookingSuccess.css";

const BookingSuccess = () => {
  return (
    <div className="success-page">

      <div className="success-box">

        <h1>🎉 Booking Confirmed!</h1>

        <p>Your hotel booking is successful.</p>

        <p>We have sent confirmation to your email.</p>

        <button onClick={() => window.location.href = "/"}>
          Back to Home
        </button>

      </div>

    </div>
  );
};

export default BookingSuccess;