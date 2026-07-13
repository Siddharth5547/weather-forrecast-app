import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function TemperatureChart({ hourly = [], theme }) {
  const data = hourly.map((item) => ({
    time: item.time,
    temp: item.temp,
  }));

  const dark = theme === "dark";

  return (
    <div
      className={`mt-6 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border backdrop-blur-xl transition-all duration-500
      ${
        dark
          ? "bg-white/10 border-white/10"
          : "bg-white border-gray-200 shadow-lg"
      }`}
    >
      <h2
        className={`text-lg sm:text-xl font-bold mb-4 ${
          dark ? "text-white" : "text-slate-800"
        }`}
      >
        📈 Temperature Trend
      </h2>

      <div className="w-full h-[180px] sm:h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={dark ? "#334155" : "#e2e8f0"}
            />

            <XAxis
              dataKey="time"
              stroke={dark ? "#d1d5db" : "#475569"}
              tick={{
                fill: dark ? "#ffffff" : "#334155",
                fontSize: 10,
              }}
              interval="preserveStartEnd"
            />

            <YAxis
              stroke={dark ? "#d1d5db" : "#475569"}
              tick={{
                fill: dark ? "#ffffff" : "#334155",
                fontSize: 10,
              }}
              width={28}
            />

            <Tooltip
              contentStyle={{
                background: dark ? "#0f172a" : "#ffffff",
                color: dark ? "#ffffff" : "#0f172a",
                border: "none",
                borderRadius: "12px",
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
              strokeWidth={3}
              dot={{
                r: 3,
                fill: dark ? "#38bdf8" : "#2563eb",
              }}
              activeDot={{
                r: 6,
                fill: "#f97316",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TemperatureChart;