import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <Header />

        <SearchBar />

        <WeatherCard />

      </div>

    </div>
  );
}

export default App;