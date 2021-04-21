import "./App.css";
import { useState, useEffect } from "react";
import LocationBar from "./components/LocationBar";
import DateBar from "./components/DateBar";
import { default as Button } from "./components/ButtonLunchDinner";
import FoodCard from "./components/Food";

function App() {
  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        <LocationBar />
        <DateBar />
        <Button />
      </div>

      <FoodCard />
    </>
  );
}

export default App;
