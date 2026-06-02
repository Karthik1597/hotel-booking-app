import React from "react";
import hotel1 from "../assets/kl-hotel1.jpg";
import hotel2 from "../assets/kl-hotel2.jpg";
import hotel3 from "../assets/kl-hotel3.jpg";

import "../styles/HotelDetails.css";

const HotelDetails = () => {
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

    </div>
  );
};

export default HotelDetails;