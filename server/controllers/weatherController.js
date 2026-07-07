const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({
        message: "City is required",
      });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    const data = response.data;

    res.json({
      city: data.name,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000,
      wind: Math.round(data.wind.speed),

      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),

      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),

      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: error.response?.data?.message || error.message,
    });
  }
};

module.exports = { getWeather };