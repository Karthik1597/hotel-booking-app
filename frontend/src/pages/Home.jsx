import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">

      <Navbar />

      <div className="hero-container">

        <div className="hero-card">

          <div className="hero-left">
            <Hero />
            <SearchBox />
          </div>

          <div className="hero-right">
            <img
              src={require("../assets/hotel.jpg")}
              alt="Hotel"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;