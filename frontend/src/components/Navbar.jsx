import React, { useState } from "react";
import AuthModal from "./AuthModal";
import "../styles/home.css";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">QuickStay</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Hotels</li>
          <li>Experience</li>
          <li>About</li>
        </ul>

        <button
          className="login-btn"
          onClick={() => setShowAuth(true)}
        >
          Login
        </button>
      </nav>

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
        />
      )}
    </>
  );
};

export default Navbar;