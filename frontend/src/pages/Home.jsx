import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import PopularDestinations from "../components/PopularDestinations";

import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="overlay">

          <Navbar />

          <div className="hero-wrapper">
            <Hero />
            <SearchBox />
          </div>

        </div>
      </div>

      <PopularDestinations />
    </>
  );
};

export default Home;