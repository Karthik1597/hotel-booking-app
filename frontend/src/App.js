import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HotelList from "./pages/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/hotels/:city" element={<HotelList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;