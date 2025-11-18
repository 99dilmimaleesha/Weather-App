interface WeatherCardProps {
  weather: any;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="text-center space-y-3 mt-4">
      <h2 className="text-2xl font-semibold text-indigo-700 capitalize">
        {weather.location.name}, {weather.location.country}
      </h2>

      <img
        src={weather.current.condition.icon}
        alt="icon"
        className="w-20 mx-auto"
      />

      <p className="text-5xl font-bold text-indigo-900">
        {Math.round(weather.current.temp_c)}°C
      </p>

      <p className="text-lg text-indigo-700 capitalize">
        {weather.current.condition.text}
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="bg-indigo-100 p-4 rounded-xl shadow w-32">
          <p className="font-semibold">Humidity</p>
          <p>{weather.current.humidity}%</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded-xl shadow w-32">
          <p className="font-semibold">Wind</p>
          <p>{weather.current.wind_kph} km/h</p>
        </div>
      </div>
    </div>
  );
}
