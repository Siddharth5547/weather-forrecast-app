import { useState, useRef } from "react";

function SearchBar({
  onSearch,
  onLocationSearch,
  theme,
}) {
  const [city, setCity] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  function handleSearch() {
    if (!city.trim()) return;
    onSearch(city.trim());
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        onLocationSearch(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      () => {
        alert("Location permission denied.");
      }
    );
  }

  function startVoiceSearch() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice Search is not supported.");
      return;
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();

      setCity(transcript);

      setTimeout(() => {
        onSearch(transcript);
      }, 100);
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed") {
        alert("Please allow microphone permission.");
      }

      if (event.error === "no-speech") {
        alert("No speech detected.");
      }

      setListening(false);
      recognitionRef.current = null;
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    recognition.start();
  }

  return (
    <div className="space-y-4 w-full">

      {/* Search Row */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">

        <input
          type="text"
          placeholder="🔍 Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`flex-1 w-full rounded-2xl px-5 py-3 border outline-none transition-all
          ${
            theme === "dark"
              ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 shadow-md"
          }`}
        />

        <button
          onClick={handleSearch}
          className="w-full sm:w-auto sm:min-w-[120px] rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 transition-all"
        >
          Search
        </button>

        <button
          onClick={startVoiceSearch}
          disabled={listening}
          title="Voice Search"
          className={`w-full sm:w-[56px] h-[52px] rounded-2xl flex items-center justify-center border transition-all
          ${
            listening
              ? "bg-red-500 text-white animate-pulse cursor-not-allowed"
              : theme === "dark"
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-white border-slate-300 text-slate-900 hover:bg-slate-100 shadow-md"
          }`}
        >
          {listening ? "🎙️" : "🎤"}
        </button>

      </div>

      {/* Listening */}
      {listening && (
        <div
          className={`rounded-xl py-2 text-center text-sm font-semibold animate-pulse
          ${
            theme === "dark"
              ? "bg-red-500/20 text-red-300"
              : "bg-red-100 text-red-600"
          }`}
        >
          🎙 Listening...
        </div>
      )}

      {/* Location */}
      <button
        onClick={handleLocation}
        className={`w-full rounded-2xl py-3 font-semibold border transition-all
        ${
          theme === "dark"
            ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
            : "bg-white border-slate-300 text-slate-900 hover:bg-slate-100 shadow-md"
        }`}
      >
        📍 Use My Current Location
      </button>

    </div>
  );
}

export default SearchBar;