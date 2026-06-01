import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2>QuickStay</h2>
          <p>
            Discover luxury stays and unforgettable
            travel experiences across Malaysia.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: support@quickstay.com</p>
          <p>Phone: +60 12-345 6789</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 QuickStay. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;