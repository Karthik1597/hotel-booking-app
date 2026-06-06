import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FeaturedHotels.css";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch(
          "https://hotel-booking-api-8ysd.onrender.com/api/hotels"
        );

        const data = await res.json();

        // normalize city names (VERY IMPORTANT FIX)
        const normalizeCity = (city) => {
          const c = city?.toLowerCase();

          if (c?.includes("kl") || c?.includes("kuala")) return "kl";
          if (c?.includes("penang")) return "penang";
          if (c?.includes("langkawi")) return "langkawi";
          if (c?.includes("johor")) return "johor";

          return c;
        };

        const grouped = {
          kl: [],
          penang: [],
          langkawi: [],
          johor: [],
        };

        data.forEach((hotel) => {
          const city = normalizeCity(hotel.city);

          if (grouped[city]) {
            grouped[city].push(hotel);
          }
        });

        // ensure 4 featured hotels (1 per city if exists)
        const featured = [
          grouped.kl[0],
          grouped.penang[0],
          grouped.langkawi[0],
          grouped.johor[0],
        ].filter(Boolean);

        setHotels(featured);
      } catch (error) {
        console.log("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Hotels</h2>
        <p>Top destinations across Malaysia</p>
      </div>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel._id}>
            <div className="hotel-image">
              <img
                src={hotel.image}
                alt={hotel.name}
                loading="lazy"
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

              <button
                className="book-btn"
                onClick={() =>
                  navigate("/hotel-details", {
                    state: hotel,
                  })
                }
              >
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