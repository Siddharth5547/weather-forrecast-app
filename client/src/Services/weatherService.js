import axios from "axios";

const API_URL = "http://localhost:5000/api/weather";

// Search by City
export const fetchWeather = async (city) => {
  const response = await axios.get(`${API_URL}?city=${city}`);
  return response.data;
};

// Search by GPS Location
export const fetchWeatherByLocation = async (lat, lon) => {
  const response = await axios.get(
    `${API_URL}?lat=${lat}&lon=${lon}`
  );

  return response.data;
};