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

  // Calculate Nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference =
    checkOutDate.getTime() - checkInDate.getTime();

  const nights = Math.ceil(
    timeDifference / (1000 * 60 * 60 * 24)
  );

  const totalPrice = nights * price;

  const handleConfirmBooking = () => {

    if (!hotelName || !checkIn || !checkOut) {
      toast.error("Missing booking details ❌");
      return;
    }

    if (!guests) {
      toast.error("Guests not selected ❌");
      return;
    }

    toast.success("Ready For Payment 💳");

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
            <p>💰 Price Per Night: RM {price}</p>
            <p>🌙 Nights: {nights}</p>
            <h3>Total: RM {totalPrice}</h3>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="booking-right">

        <h2>Guest Information</h2>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <textarea
            placeholder="Special Request (optional)"
          />

          <button
            type="button"
            onClick={handleConfirmBooking}
          >
            Proceed To Payment
          </button>

        </form>

      </div>

    </div>
  );
};

export default BookingPage;