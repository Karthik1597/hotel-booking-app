import React from "react";

const SearchBox = () => {
  return (
    <div className="search-box">

      <div className="search-field">
        <label>Destination</label>
        <input type="text" placeholder="Type here" />
      </div>

      <div className="search-field">
        <label>Check in</label>
        <input type="date" />
      </div>

      <div className="search-field">
        <label>Check out</label>
        <input type="date" />
      </div>

      <div className="search-field">
        <label>Guests</label>
        <input type="number" placeholder="0" />
      </div>

      <button className="search-btn">
        Search
      </button>

    </div>
  );
};

export default SearchBox;