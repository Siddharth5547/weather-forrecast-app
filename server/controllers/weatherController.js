const getWeather = (req, res) => {
  res.json({
    city: "Delhi",
    temperature: 32,
    condition: "Sunny",
    humidity: 60,
    wind: 15,
  });
};

module.exports = {
  getWeather,
};