import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BookingPage.css";
import { toast } from "react-toastify";

const BookingPage = () => {
  const location = useLocation();
  const data = location.state;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  const checkIn = data?.checkIn;
  const checkOut = data?.checkOut;
  const guests = data?.guests;
  const price = data?.price;
  const hotelName = data?.hotelName;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference = checkOutDate - checkInDate;

  const nights = Math.max(
    1,
    Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
  );

  const totalPrice = nights * price;

  const handleConfirmBooking = async () => {
    if (!hotelName || !checkIn || !checkOut) {
      toast.error("Missing booking details ❌");
      return;
    }

    if (!fullName || !phone || !email) {
      toast.error("Please fill all guest details ❌");
      return;
    }

    toast.success("Redirecting to payment 💳");

    localStorage.setItem(
      "bookingData",
      JSON.stringify({
        hotelName,
        checkIn,
        checkOut,
        guests,
        totalPrice,
        fullName,
        phone,
        email,
        request,
      })
    );

    try {
      const response = await fetch(
        "https://hotel-booking-api-8ysd.onrender.com/api/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hotelName,
            price: totalPrice,
            checkIn,
            checkOut,
            guests,
          }),
        }
      );

      const result = await response.json();

      if (result.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment failed ❌");
    }
  };

  return (
    <div className="booking-page">

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

      <div className="booking-right">

        <h2>Guest Information</h2>

        <form>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Special Request (optional)"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
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