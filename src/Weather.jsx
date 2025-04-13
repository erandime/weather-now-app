export default function Weather({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="col-lg-6">
      <div className="h-100 p-5 bg-body-tertiary border rounded-3 weather-card">
        <h2>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <p>
          <strong>Temperature:</strong> {weatherData.main.temp}°C
        </p>
        <p>
          <strong>Condition:</strong> {weatherData.weather[0].description}
        </p>
        <p>
          <strong>Humidity:</strong> {weatherData.main.humidity}%
        </p>
        <p>
          <strong>Wind:</strong> {weatherData.wind.speed} m/s
        </p>
      </div>
    </div>
  );
}
