import React from "react";
import "../styles/PopularDestinations.css";
import { useNavigate } from "react-router-dom";

import kl from "../assets/kuala-lumpur.jpg";
import penang from "../assets/penang.jpg";
import langkawi from "../assets/langkawi.jpg";
import johor from "../assets/johor-bahru.jpg";



const destinations = [
  {
    name: "Kuala Lumpur",
    image: kl,
    hotels: "250+ Hotels",
  },
  {
    name: "Penang",
    image: penang,
    hotels: "180+ Hotels",
  },
  {
    name: "Langkawi",
    image: langkawi,
    hotels: "120+ Hotels",
  },
  {
    name: "Johor Bahru",
    image: johor,
    hotels: "150+ Hotels",
  },
];

const PopularDestinations = () => {

  const navigate = useNavigate();

  return (
    <section className="destinations-section">

      <div className="section-header">
        <h2>Popular Destinations</h2>
        <p>Discover Malaysia's most loved travel destinations.</p>
      </div>

      <div className="destinations-grid">

        {destinations.map((item, index) => (
          <div
            className="destination-card"
            key={index}
            onClick={() => navigate(`/hotels/${encodeURIComponent(item.name)}`)}
            style={{ cursor: "pointer" }}
          >

            <img src={item.image} alt={item.name} />

            <div className="destination-overlay">
              <h3>{item.name}</h3>
              <span>{item.hotels}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PopularDestinations;