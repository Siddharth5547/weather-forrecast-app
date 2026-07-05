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

    console.log("City:", city);
    console.log("API Key:", apiKey);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    const data = response.data;

    res.json({
      city: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
    });
  } catch (error) {
  console.log("========== ERROR ==========");
  console.log(error.response?.data || error.message);
  console.log("===========================");

  res.status(500).json({
    message: error.response?.data?.message || error.message,
  });
}
};

module.exports = {
  getWeather,
};