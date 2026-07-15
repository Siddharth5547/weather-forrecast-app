const express = require("express");
const router = express.Router();

const { getWeatherAdvice } = require("../controllers/AIController");

router.post("/weather-advice", getWeatherAdvice);

module.exports = router;