import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/BookingPage.css";
import { toast } from "react-toastify";

const BookingPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const checkIn = data?.checkIn;
  const checkOut = data?.checkOut;
  const guests = data?.guests;
  const price = data?.price;
  const hotelName = data?.hotelName;

  const handleConfirmBooking = () => {

    if (!hotelName || !checkIn || !checkOut) {
      toast.error("Missing booking details ❌");
      return;
    }

    if (!guests) {
      toast.error("Guests not selected ❌");
      return;
    }

    toast.success("Booking Confirmed 🎉");

    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };

  return (
    <div className="booking-page">

      {/* LEFT SIDE */}
      <div className="booking-left">

        <div className="hotel-card">

          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="hotel"
          />

          <h2>{hotelName}</h2>

          <div className="info">
            <p>📅 Check-in: {checkIn}</p>
            <p>📅 Check-out: {checkOut}</p>
            <p>👤 Guests: {guests}</p>
          </div>

          <div className="price">
            RM {price} / night
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

          <button
            type="button"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
};

export default BookingPage;