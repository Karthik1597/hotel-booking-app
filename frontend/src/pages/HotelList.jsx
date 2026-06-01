import React from "react";
import { useParams } from "react-router-dom";
import "../styles/HotelList.css";

const dummyHotels = [
  { name: "Grand Plaza Hotel", price: 250, rating: 4.5 },
  { name: "City View Hotel", price: 180, rating: 4.2 },
  { name: "Luxury Stay Resort", price: 320, rating: 4.8 },
  { name: "Budget Inn", price: 120, rating: 3.9 }
];

const HotelList = () => {
  const { city } = useParams();

  return (
  <div className="hotel-page">

    <h1 className="hotel-title">Hotels in {city}</h1>

    <div className="hotel-grid">

      {dummyHotels.map((hotel, index) => (
        <div key={index} className="hotel-card">

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