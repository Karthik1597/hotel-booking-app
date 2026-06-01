import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      <div className="testimonials-header">
        <h2>What Our Travelers Say</h2>
        <p>
          Trusted by thousands of happy guests across Malaysia.
        </p>
      </div>

      <div className="testimonials-grid">

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p>
            Booking through QuickStay was simple and fast.
            The hotel exceeded my expectations.
          </p>

          <h4>Sarah Lim</h4>
          <span>Kuala Lumpur</span>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p>
            Great prices and excellent customer support.
            I found the perfect resort in Langkawi.
          </p>

          <h4>Daniel Tan</h4>
          <span>Penang</span>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p>
            Secure booking process and instant confirmation.
            Highly recommended for frequent travelers.
          </p>

          <h4>Aisyah Rahman</h4>
          <span>Johor Bahru</span>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;