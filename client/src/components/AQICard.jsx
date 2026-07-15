function AQICard({ aqi }) {

  if (!aqi) return null;

  const getStatus = (index) => {
    if (index === 1) return "Good";
    if (index === 2) return "Moderate";
    if (index === 3) return "Unhealthy";
    if (index === 4) return "Poor";
    return "Very Poor";
  };


  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold mb-4">
        🌿 Air Quality Index
      </h2>


      <div className="flex items-center gap-4">

        <div className="text-4xl font-bold">
          {aqi.index}
        </div>

        <div>
          <p className="text-lg">
            {getStatus(aqi.index)}
          </p>

          <p className="text-sm opacity-70">
            US EPA Index
          </p>
        </div>

      </div>


      <div className="grid grid-cols-2 gap-4 mt-5">

        <div>
          PM2.5
          <p className="font-bold">
            {aqi.pm25}
          </p>
        </div>


        <div>
          PM10
          <p className="font-bold">
            {aqi.pm10}
          </p>
        </div>


        <div>
          CO
          <p className="font-bold">
            {aqi.co}
          </p>
        </div>


        <div>
          NO₂
          <p className="font-bold">
            {aqi.no2}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AQICard;