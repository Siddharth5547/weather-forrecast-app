import axios from "axios";

const API_URL = "http://localhost:5000/api/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_URL}?city=${city}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};