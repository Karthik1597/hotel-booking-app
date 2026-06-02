import React from "react";
import "../styles/BookingPage.css";

const BookingPage = () => {
  return (
    <div className="booking-page">

      {/* LEFT SIDE */}
      <div className="booking-left">

        <div className="hotel-card">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="hotel"
          />

          <h2>Luxury Hotel Room</h2>

          <div className="info">
            <p>📅 Check-in: 10 June</p>
            <p>📅 Check-out: 12 June</p>
            <p>👤 Guests: 2</p>
          </div>

          <div className="price">
            RM 250 / night
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="booking-right">

        <h2>Guest Information</h2>

        <form>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />

          <textarea placeholder="Special Request (optional)" />

          <button type="button">
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
};

export default BookingPage;