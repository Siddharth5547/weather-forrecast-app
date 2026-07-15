const express = require("express");
const router = express.Router();

const { getWeatherAdvice } = require("../Controllers/AIController");

router.post("/weather-advice", getWeatherAdvice);

module.exports = router;