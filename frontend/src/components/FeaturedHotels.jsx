import React, { useEffect, useState } from "react";
import "../styles/FeaturedHotels.css";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch(
          "https://hotel-booking-api-8ysd.onrender.com/api/hotels"
        );

        const data = await res.json();

        // Show first 4 hotels
        setHotels(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Hotels</h2>
        <p>Top-rated stays handpicked for your comfort</p>
      </div>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel._id}>
            <div className="hotel-image">
              <img
                src={hotel.image}
                alt={hotel.name}
              />
            </div>

            <div className="hotel-info">
              <h3>{hotel.name}</h3>

              <p>
                {hotel.city
                  ?.replace(/\b\w/g, (c) => c.toUpperCase())}
              </p>

              <div className="hotel-bottom">
                <span className="price">
                  RM {hotel.price}/night
                </span>

                <span className="rating">
                  ⭐ {hotel.rating}
                </span>
              </div>

              <button className="book-btn">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedHotels;