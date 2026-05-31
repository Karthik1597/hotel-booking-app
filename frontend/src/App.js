import React from "react";
import Home from "./pages/Home";
import PopularDestinations from "./components/PopularDestinations";


function App() {
  return (
    <div className="app-scroll">
      <Home />
      <PopularDestinations />
    </div>
  );
}

export default App;