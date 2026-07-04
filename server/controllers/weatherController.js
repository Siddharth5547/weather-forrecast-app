const getWeather = (req, res) => {
  const city = req.query.city;

  res.json({
    city: city,
    temperature: 32,
    condition: "Sunny",
    humidity: 60,
    wind: 15,
  });
};

module.exports = { getWeather };