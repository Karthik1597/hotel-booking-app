import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    if (!destination) return;

    navigate(`/hotels/${destination.toLowerCase()}`, {
      state: {
        checkIn,
        checkOut,
        guests,
      },
    });
  };

  return (
    <div className="search-box">

      <div className="search-field">
        <label>Destination</label>
        <input
          type="text"
          placeholder="Type here"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="search-field">
        <label>Check in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="search-field">
        <label>Check out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="search-field">
        <label>Guests</label>
        <input
          type="number"
          placeholder="0"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>

    </div>
  );
};

export default SearchBox;