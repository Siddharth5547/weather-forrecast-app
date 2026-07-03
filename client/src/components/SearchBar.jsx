import { useState } from "react";

function SearchBar() {
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;