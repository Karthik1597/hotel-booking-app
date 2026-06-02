import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/HotelList.css";

import hotel1 from "../assets/kl-hotel1.jpg";
import hotel2 from "../assets/kl-hotel2.jpg";
import hotel3 from "../assets/kl-hotel3.jpg";
import hotel4 from "../assets/kl-hotel4.jpg";

const dummyHotels = [
  { name: "Grand Plaza Hotel", price: 250, rating: 4.5, image: hotel1 },
  { name: "City View Hotel", price: 180, rating: 4.2, image: hotel2 },
  { name: "Luxury Stay Resort", price: 320, rating: 4.8, image: hotel3 },
  { name: "Budget Inn", price: 120, rating: 3.9, image: hotel4 }
];

const HotelList = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  return (
    <div className="hotel-page">

      <h1 className="hotel-title">Hotels in {city}</h1>

      <div className="hotel-grid">

        {dummyHotels.map((hotel, index) => (
          <div
            key={index}
            className="hotel-card"
            onClick={() => navigate("/hotel-details")}
            style={{ cursor: "pointer" }}
          >

            {/* ONLY ADD IMAGE HERE */}
            <img
              src={hotel.image}
              alt={hotel.name}
              className="hotel-img"
            />

            <div className="hotel-info">
              <h3>{hotel.name}</h3>

              <p className="price">
                RM {hotel.price} / night
              </p>

              <p className="rating">
                ⭐ {hotel.rating} Rating
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default HotelList;