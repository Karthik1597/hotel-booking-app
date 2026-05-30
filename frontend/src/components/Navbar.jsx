import React from "react";
import "../styles/home.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">QuickStay</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Hotels</li>
        <li>Experience</li>
        <li>About</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;