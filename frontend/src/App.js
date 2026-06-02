import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/hotels/:city"
          element={<HotelList />}
        />

        <Route
          path="/hotel-details"
          element={<HotelDetails />}
        />

        <Route
          path="/booking"
          element={<BookingPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;