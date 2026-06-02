import React from "react";
import hotel1 from "../assets/kl-hotel1.jpg";

const HotelDetails = () => {
    return (
        <div style={{ padding: "40px" }}>
            <h1>Grand Plaza Hotel</h1>

            <img
                src={hotel1}
                alt="Grand Plaza Hotel"
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    borderRadius: "12px"
                }}
            />

            <h2>RM 250 / night</h2>

            <p>⭐ 4.5 Rating</p>

            <p>
                Luxury hotel located in the city center with
                swimming pool, gym and free breakfast.
            </p>
        </div>
    );
};

export default HotelDetails;