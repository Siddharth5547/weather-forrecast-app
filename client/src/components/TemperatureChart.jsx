import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function TemperatureChart({ hourly = [], theme }) {
  const data = hourly.map((item) => ({
    time: item.time,
    temp: item.temp,
  }));

  const dark = theme === "dark";

  return (
    <div
      className={`mt-6 rounded-3xl p-5 border backdrop-blur-xl transition-all duration-500
      ${
        dark
          ? "bg-white/10 border-white/10"
          : "bg-white border-gray-200 shadow-lg"
      }`}
    >
      <h2
        className={`text-xl font-bold mb-4 ${
          dark ? "text-white" : "text-slate-800"
        }`}
      >
        📈 Temperature Trend
      </h2>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            stroke={dark ? "#d1d5db" : "#475569"}
            tick={{
              fill: dark ? "#ffffff" : "#334155",
              fontSize: 12,
            }}
          />

          <Tooltip
            contentStyle={{
              background: dark ? "#0f172a" : "#ffffff",
              color: dark ? "#ffffff" : "#0f172a",
              border: "none",
              borderRadius: "14px",
              boxShadow: "0 8px 24px rgba(0,0,0,.15)",
            }}
            labelStyle={{
              color: dark ? "#ffffff" : "#0f172a",
            }}
          />

          <Line
            type="monotone"
            dataKey="temp"
            stroke={dark ? "#38bdf8" : "#2563eb"}
            strokeWidth={4}
            dot={{
              r: 5,
              fill: dark ? "#38bdf8" : "#2563eb",
            }}
            activeDot={{
              r: 8,
              fill: "#f97316",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;
