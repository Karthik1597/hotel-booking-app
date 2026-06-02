import React, { useState } from "react";
import hotel1 from "../assets/kl-hotel1.jpg";
import hotel2 from "../assets/kl-hotel2.jpg";
import hotel3 from "../assets/kl-hotel3.jpg";

import "../styles/HotelDetails.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HotelDetails = () => {

  // ✅ NEW STATE ADDED
  const [isAvailable, setIsAvailable] = useState(null);

  const checkAvailability = () => {
    const available = Math.random() > 0.5;

    // ✅ STORE RESULT
    setIsAvailable(available);

    if (available) {
      toast.success("Room Available ✅");
    } else {
      toast.error("Room Not Available ❌");
    }
  };

  return (
    <div className="details-page">

      <div className="gallery">

        <img
          src={hotel1}
          alt="hotel"
          className="main-image"
        />

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
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Check Out</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Guests</label>

            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>

          <button
            className="check-btn"
            onClick={checkAvailability}
          >
            Check Availability
          </button>

          {/* ✅ NEW: BOOK NOW BUTTON */}
          {isAvailable && (
            <button className="book-btn">
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