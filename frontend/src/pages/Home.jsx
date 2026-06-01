import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import PopularDestinations from "../components/PopularDestinations";
import FeaturedHotels from "../components/FeaturedHotels";
import "../styles/home.css";
import WhyChooseQuickStay from "../components/WhyChooseQuickStay";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

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
      <FeaturedHotels />
      <Testimonials />
       <WhyChooseQuickStay />
       <Footer />
    </>
  );
};

export default Home;