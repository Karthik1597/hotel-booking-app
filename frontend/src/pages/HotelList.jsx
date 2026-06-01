import React from "react";
import { useParams } from "react-router-dom";

const dummyHotels = [
  { name: "Grand Plaza Hotel", price: 250, rating: 4.5 },
  { name: "City View Hotel", price: 180, rating: 4.2 },
  { name: "Luxury Stay Resort", price: 320, rating: 4.8 },
  { name: "Budget Inn", price: 120, rating: 3.9 }
];

const HotelList = () => {
  const { city } = useParams();

  return (
    <div style={{ padding: "50px" }}>

      <h1>Hotels in {city}</h1>

      <div style={{ marginTop: "30px" }}>

        {dummyHotels.map((hotel, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px"
            }}
          >
            <h3>{hotel.name}</h3>
            <p>Price: RM {hotel.price}</p>
            <p>Rating: ⭐ {hotel.rating}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default HotelList;