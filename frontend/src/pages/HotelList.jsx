import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/HotelList.css";

const HotelList = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch(
          "https://hotel-booking-api-8ysd.onrender.com/api/hotels"
        );

        const data = await res.json();

        // filter by city
        const filtered = data.filter(
          (hotel) =>
            hotel.city.toLowerCase() === city.toLowerCase()
        );

        setHotels(filtered);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotels();
  }, [city]);

  return (
    <div className="hotel-page">
      <h1 className="hotel-title">Hotels in {city}</h1>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="hotel-card"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate("/hotel-details", {
                state: hotel,
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