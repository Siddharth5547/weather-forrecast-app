const express = require("express");
const cors = require("cors");

const WeatherRoutes = require("./Routes/WeatherRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", WeatherRoutes);

module.exports = app;
