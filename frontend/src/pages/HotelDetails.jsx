import React, { useState } from "react";
import hotel1 from "../assets/kl-hotel1.jpg";
import hotel2 from "../assets/kl-hotel2.jpg";
import hotel3 from "../assets/kl-hotel3.jpg";

import "../styles/HotelDetails.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HotelDetails = () => {

  const navigate = useNavigate();

  const [isAvailable, setIsAvailable] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const checkAvailability = () => {

    if (!checkIn || !checkOut) {
      toast.error("Please select Check-in and Check-out dates");
      return;
    }

    const available = true;

    setIsAvailable(available);

    if (available) {
      toast.success("Room Available ✅");
    } else {
      toast.error("Room Not Available ❌");
    }
  };

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        checkIn,
        checkOut,
        guests,
        price: 250,
        hotelName: "Experience Luxury Like Never Before"
      }
    });
  };

  return (
    <div className="details-page">

      <div className="gallery">

        <img src={hotel1} alt="hotel" className="main-image" />

        <div className="side-images">
          <img src={hotel2} alt="hotel" />
          <img src={hotel3} alt="hotel" />
        </div>

      </div>

      <div className="hotel-header">

        <div>
          <h1>Experience Luxury Like Never Before</h1>

          <div className="amenities">
            <span>🛎 Room Service</span>
            <span>🏔 Mountain View</span>
            <span>🏊 Pool Access</span>
          </div>
        </div>

        <h2>RM 250 / night</h2>

      </div>

      <div className="availability-box">

        <h3>Check Availability</h3>

        <div className="booking-form">

          <div className="form-group">
            <label>Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Guests</label>

            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
            </select>
          </div>

          {isAvailable !== true && (
            <button className="check-btn" onClick={checkAvailability}>
              Check Availability
            </button>
          )}

          {isAvailable === true && (
            <button className="book-btn" onClick={handleBooking}>
              Book Now
            </button>
          )}

        </div>

      </div>

      <ToastContainer />

    </div>
  );
};

export default HotelDetails;