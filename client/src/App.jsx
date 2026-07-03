import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default App;