import { useState } from "react";
import { fetchWeatherApi } from "../api/weather";
import { WeatherCard } from "../components/WeatherCard";
import Weather_Img from "../assets/weather.jpg";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await fetchWeatherApi(city);
      setWeather(data);
    } catch (err) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center">
      {/* Background Image with Gradient Overlay */}
      <img
        src={Weather_Img}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-300 opacity-62"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-indigo-600">
          Weather App
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full">
          <input
            type="text"
            placeholder="Enter city name"
            className="flex-1 p-3 rounded-xl border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={fetchWeather}
            className="px-5 py-3 bg-indigo-600  rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-indigo-600 font-medium">Loading...</p>}
        {error && <p className="text-center text-red-600 font-medium">{error}</p>}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
