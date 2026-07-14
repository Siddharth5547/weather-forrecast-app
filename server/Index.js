const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("./Routes/WeatherRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://weather-verse-4gs6e7nqk-weather-now.vercel.app",
      "https://weather-verse-two.vercel.app",
      "https://weather-verse-git-main-weather-now.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/weather", weatherRoutes);

module.exports = app;