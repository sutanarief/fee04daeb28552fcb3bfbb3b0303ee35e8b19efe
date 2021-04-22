import "./App.css";
import LocationBar from "./components/LocationBar";
import DateBar from "./components/DateBar";
import { default as Button } from "./components/ButtonLunchDinner";
import FoodCard from "./components/Food";

function App() {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "150px",
        }}
      >
        <LocationBar />
        <DateBar />
        <Button />
      </div>

      <FoodCard />
    </>
  );
}

export default App;
