import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">

      <Navbar />

      <div className="overlay">

        <Hero />

        <SearchBox />

      </div>

    </div>
  );
};

export default Home;