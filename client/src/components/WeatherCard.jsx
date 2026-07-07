function WeatherCard({
  city,
  temperature,
  condition,
  humidity,
  wind,
}) {

  let icon = "☀️";

  if (condition === "Clouds") icon = "☁️";
  if (condition === "Rain") icon = "🌧️";
  if (condition === "Snow") icon = "❄️";
  if (condition === "Thunderstorm") icon = "⛈️";
  if (condition === "Mist") icon = "🌫️";

  return (
    <div className="mt-8 bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white shadow-2xl border border-white/20">

      <h2 className="text-4xl text-center mb-5">
        {icon}
      </h2>

      <h2 className="text-3xl font-bold text-center">
        📍 {city}
      </h2>

      <div className="mt-8 space-y-4 text-xl">

        <div className="flex justify-between">
          <span>🌡 Temperature</span>
          <span>{temperature}°C</span>
        </div>

        <div className="flex justify-between">
          <span>☁ Condition</span>
          <span>{condition}</span>
        </div>

        <div className="flex justify-between">
          <span>💧 Humidity</span>
          <span>{humidity}%</span>
        </div>

        <div className="flex justify-between">
          <span>💨 Wind</span>
          <span>{wind} km/h</span>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;