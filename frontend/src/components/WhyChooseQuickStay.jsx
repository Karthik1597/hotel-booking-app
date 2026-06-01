import React from "react";
import "../styles/WhyChooseQuickStay.css";

const WhyChooseQuickStay = () => {
  return (
    <section className="features-section">

      <div className="features-header">
        <h2>Why Choose QuickStay?</h2>

        <p>
          Trusted by thousands of travelers across Malaysia.
        </p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Secure Booking</h3>
          <p>Safe and protected hotel reservations.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Best Price</h3>
          <p>Competitive prices on every stay.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Instant Confirmation</h3>
          <p>Receive booking confirmation instantly.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎧</div>
          <h3>24/7 Support</h3>
          <p>Our team is always ready to help.</p>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseQuickStay;