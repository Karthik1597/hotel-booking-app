import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/HotelList.css";

const dummyHotels = [
  {
    name: "Grand Plaza Hotel",
    price: 250,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },

  {
    name: "City View Hotel",
    price: 180,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  },

  {
    name: "Luxury Stay Resort",
    price: 320,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },

  {
    name: "Budget Inn",
    price: 120,
    rating: 3.9,
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c5"
  }
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
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate("/hotel-details", {
                state: hotel
              })
            }
          >
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