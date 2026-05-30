import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">

        <Navbar />

        <div className="hero-wrapper">
          <Hero />
          <SearchBox />
        </div>

      </div>
    </div>
  );
};

export default Home;