import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const [weather, setWeather] = useState({
  city: "Delhi",
  temperature: 32,
  condition: "Clear Sky",
  humidity: 65,
  wind: 12,
});

function App() {
  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
          <WeatherCard
          city={weather.city}
          temperature={weather.temperature}
          condition={weather.condition}
          humidity={weather.humidity}
          wind={weather.wind}
      />
    </div>
  );
}
    function handleSearch(city) {
      setWeather({
        city: city,
        temperature: 30,
        condition: "Sunny",
        humidity: 60,
        wind: 15,
      });
    }

export default App;