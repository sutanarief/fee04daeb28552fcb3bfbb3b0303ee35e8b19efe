import "./App.css";
import LocationBar from "./components/LocationBar";
import DateBar from "./components/DateBar";
import { default as Button } from "./components/ButtonLunchDinner";
import FoodCard from "./components/Food";

function App() {
  return (
    <>
      <LocationBar />
      <DateBar />
      <Button />
      <FoodCard />
    </>
  );
}

export default App;
