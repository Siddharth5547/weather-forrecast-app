const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("./Routes/WeatherRoutes");
const aiRoutes = require("./Routes/AIRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://weather-verse-two.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use("/api/ai", aiRoutes);

module.exports = app;