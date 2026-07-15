require("dotenv").config();

console.log(process.env.WEATHER_API_KEY);

const app = require("./Index");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});