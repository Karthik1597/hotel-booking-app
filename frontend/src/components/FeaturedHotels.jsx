import React from "react";
import "../styles/FeaturedHotels.css";

import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";

const hotels = [
  {
    name: "Grand Plaza Hotel",
    location: "Kuala Lumpur",
    price: "RM 180/night",
    rating: "4.8",
    image: hotel1,
  },
  {
    name: "Sunrise Resort",
    location: "Langkawi",
    price: "RM 220/night",
    rating: "4.7",
    image: hotel2,
  },
  {
    name: "Seaview Inn",
    location: "Penang",
    price: "RM 150/night",
    rating: "4.6",
    image: hotel3,
  },
  {
    name: "City Comfort Hotel",
    location: "Johor Bahru",
    price: "RM 130/night",
    rating: "4.5",
    image: hotel4,
  },
];

const FeaturedHotels = () => {
  return (
    <section className="featured-section">

      <div className="featured-header">
        <h2>Featured Hotels</h2>
        <p>Top-rated stays handpicked for your comfort</p>
      </div>

      <div className="hotel-grid">

        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>

            <div className="hotel-image">
              <img src={hotel.image} alt={hotel.name} />
            </div>

            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>

              <div className="hotel-bottom">
                <span className="price">{hotel.price}</span>
                <span className="rating">⭐ {hotel.rating}</span>
              </div>

              <button className="book-btn">Book Now</button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FeaturedHotels;