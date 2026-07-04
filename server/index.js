const express = require("express");

const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

const PORT = 5000;

app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});