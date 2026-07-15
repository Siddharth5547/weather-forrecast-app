import { motion } from "framer-motion";
import WeatherEffects from "./WeatherEffects";
import TemperatureChart from "./TemperatureChart";

function WeatherCard({
  city,
  temperature,
  feelsLike,
  condition,
  description,
  humidity,
  pressure,
  visibility,
  wind,
  sunrise,
  sunset,
  icon,
  hourly = [],
  daily = [],
  theme,
  aqi,
}) {
  const cardClass =
    theme === "dark"
      ? "bg-white/10 border-white/20 text-white"
      : "bg-white/90 border-gray-200 text-slate-900";

  const boxClass = theme === "dark" ? "bg-white/10" : "bg-slate-100";

  const secondaryText = theme === "dark" ? "text-gray-300" : "text-slate-600";

  function getAQIStatus(index) {
    if (index === 1) return "Good";
    if (index === 2) return "Moderate";
    if (index === 3) return "Unhealthy";
    if (index === 4) return "Poor";
    if (index === 5) return "Very Poor";

    return "Unknown";
  }

  function getWeatherEmoji(condition) {
    const text = condition.toLowerCase();

    if (text.includes("thunder") || text.includes("storm")) return "⛈️";

    if (text.includes("rain")) return "🌧️";

    if (text.includes("snow")) return "❄️";

    if (text.includes("mist") || text.includes("fog") || text.includes("haze"))
      return "🌫️";

    if (text.includes("cloud")) return "☁️";

    if (text.includes("sunny") || text.includes("clear")) return "☀️";

    return "🌤️";
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
      relative mt-6 max-w-md mx-auto overflow-hidden
      rounded-[32px] backdrop-blur-2xl border
      shadow-[0_15px_40px_rgba(0,0,0,.35)]
      transition-all duration-500
      ${cardClass}
      `}
    >
      <WeatherEffects condition={condition} />

      <div className="relative z-10 p-7 text-center">
        <motion.img
          src={icon}
          alt=""
          className="w-28 h-28 mx-auto drop-shadow-2xl"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
        />

        <h2 className="text-3xl font-bold mt-2">📍 {city}</h2>

        <p
          className={`mt-2 ${
            theme === "dark" ? "text-cyan-300" : "text-blue-600"
          }`}
        >
          {description}
        </p>

        <motion.h1
          className="text-7xl font-black mt-4"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          {temperature}°
        </motion.h1>

        <p className={secondaryText}>Feels Like {feelsLike}°C</p>
      </div>

      {/* AQI CARD */}

      {aqi && (
        <div className="relative z-10 px-5 mb-5">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className={`${boxClass} rounded-3xl p-5`}
          >
            <h3 className="text-xl font-bold mb-4">🌿 Air Quality</h3>

            <div className="flex items-center gap-4">
              <div className="text-5xl font-black">{aqi.index}</div>

              <div>
                <p className="text-lg font-bold">{getAQIStatus(aqi.index)}</p>

                <p className={`${secondaryText} text-sm`}>US EPA Index</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <div>
                PM2.5
                <p className="font-bold">{aqi.pm25}</p>
              </div>

              <div>
                PM10
                <p className="font-bold">{aqi.pm10}</p>
              </div>

              <div>
                CO
                <p className="font-bold">{aqi.co}</p>
              </div>

              <div>
                NO₂
                <p className="font-bold">{aqi.no2}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {/* WEATHER DETAILS */}

      <div className="relative z-10 grid grid-cols-2 gap-4 px-5">
        {[
          ["💧 Humidity", humidity + "%"],
          ["💨 Wind", wind + " km/h"],
          ["🌡 Pressure", pressure],
          ["👁 Visibility", visibility + " km"],
        ].map(([title, value], index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
            }}
            className={`${boxClass} rounded-3xl p-4`}
          >
            <p className={`${secondaryText} text-sm`}>{title}</p>

            <h3 className="text-2xl font-bold mt-2">{value}</h3>
          </motion.div>
        ))}
      </div>

      {/* SUNRISE SUNSET */}

      <div className="relative z-10 flex gap-4 px-5 py-6">
        <motion.div
          whileHover={{
            y: -4,
          }}
          className={`${boxClass} flex-1 rounded-3xl p-4 text-center`}
        >
          <h2 className="text-3xl">🌅</h2>

          <p className={`${secondaryText} text-sm mt-2`}>Sunrise</p>

          <h3 className="font-bold mt-1">{sunrise}</h3>
        </motion.div>

        <motion.div
          whileHover={{
            y: -4,
          }}
          className={`${boxClass} flex-1 rounded-3xl p-4 text-center`}
        >
          <h2 className="text-3xl">🌇</h2>

          <p className={`${secondaryText} text-sm mt-2`}>Sunset</p>

          <h3 className="font-bold mt-1">{sunset}</h3>
        </motion.div>
      </div>

      {/* HOURLY FORECAST */}

      {hourly.length > 0 && (
        <div className="relative z-10 px-5 pb-6">
          <h3 className="text-xl font-bold mb-4">⏰ Today</h3>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {hourly.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.06,
                }}
                className={`
                min-w-[90px] rounded-3xl
                border backdrop-blur-lg p-3 text-center
                ${
                  theme === "dark"
                    ? "bg-white/10 border-white/10"
                    : "bg-slate-100 border-gray-200"
                }
                `}
              >
                <p className={`text-sm ${secondaryText}`}>{item.time}</p>

                <img src={item.icon} alt="" className="w-12 h-12 mx-auto" />

                <h3 className="text-xl font-bold">{item.temp}°</h3>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* TEMPERATURE CHART */}

      <TemperatureChart hourly={hourly} theme={theme} />

      {/* 5 DAY FORECAST */}

      {daily.length > 0 && (
        <div className="relative z-10 px-5 pb-6">
          <h3 className="text-xl font-bold mb-4">📅 5-Day Forecast</h3>

          <div className="space-y-3">
            {daily.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                  x: 5,
                }}
                className={`
                flex items-center justify-between
                rounded-2xl px-4 py-3
                backdrop-blur-lg border
                ${
                  theme === "dark"
                    ? "bg-white/10 border-white/10"
                    : "bg-slate-100 border-gray-200"
                }
                `}
              >
                <div>
                  <h3 className="font-bold">{item.day}</h3>

                  <p className={`text-xs ${secondaryText}`}>
                    {item.condition.length > 18
                      ? item.condition.slice(0, 18) + "..."
                      : item.condition}
                  </p>
                </div>

                <div className="w-12 h-12 flex items-center justify-center text-4xl">
                  {getWeatherEmoji(item.condition)}
                </div>

                <h3 className="text-2xl font-bold">{item.temp}°</h3>
              </motion.div>
            ))}
          </div>
        </div>
      )}
     
    </motion.div>
  );
}

export default WeatherCard;
