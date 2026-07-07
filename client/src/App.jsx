import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    try {
      setLoading(true);
      setError("");

      const data = await fetchWeather(city);
      setWeather(data);

    } catch (err) {
      setError("❌ City not found");
      setWeather(null);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex justify-center items-center px-4">

      <div className="w-full max-w-md">

        <Header />

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <p className="text-white text-center mt-6 animate-pulse">
            Loading Weather...
          </p>
        )}

        {error && (
          <p className="text-red-400 text-center mt-6">
            {error}
          </p>
        )}

        {weather && (
          <WeatherCard
            city={weather.city}
            temperature={weather.temperature}
            condition={weather.condition}
            humidity={weather.humidity}
            wind={weather.wind}
          />
        )}

      </div>

    </div>
  );
}

export default App;