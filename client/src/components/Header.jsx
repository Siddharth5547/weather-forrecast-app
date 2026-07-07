function Header() {
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="text-center mb-8">

      <div className="text-7xl mb-3">
        🌤️
      </div>

      <h1 className="text-4xl font-extrabold text-white">
        Weather Forecast
      </h1>

      <p className="text-gray-300 text-xl mt-3">
        Know the weather before you go 🌍
      </p>

      <p className="text-gray-400 mt-2">
        {date.toLocaleDateString("en-IN", options)}
      </p>

    </div>
  );
}

export default Header;