import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [futurePredictionData, setFuturePredictionData] = useState(null);

  useEffect(() => {
    const fetchData = async (latitude, longitude) => {
      try {
        // Fetch current weather data
        const currentWeatherResponse = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        );
        setWeatherData(currentWeatherResponse.data);

        // Fetch forecast data for the next 5 days
        const forecastResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=5`
        );
        setForecastData(forecastResponse.data);

        // Fetch future weather prediction data for the next 3 days
        const predictionResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=3&forecast_type=7day`
        );
        setFuturePredictionData(predictionResponse.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Get user's location and fetch weather data
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchData(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [apiKey]);

  if (!weatherData || !forecastData || !futurePredictionData) {
    return <div>Loading...</div>;
  }
  // Render current weather information
  const renderCurrentWeather = () => (
    <div>
      <h2>{weatherData.location.name}</h2>
      <p>{weatherData.current.condition.text}</p>
      <p>
        <img src={weatherData.current.condition.icon} alt="" />
      </p>
      <p>{weatherData.current.temp_c}°C</p>
      <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
    </div>
  );

  // Render forecast for the next 5 days
  const renderForecast = () => (
    <div>
      <h3>5-Day Forecast</h3>
      {forecastData.forecast.forecastday.map((day) => (
        <div key={day.date}>
          <p>{day.date}</p>
          <p>{day.day.condition.text}</p>
          <p>
            {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
          </p>
          <p>Wind Speed: {day.day.maxwind_kph} km/h</p>
        </div>
      ))}
    </div>
  );

  // Render future weather prediction for the next 3 days
  const renderFuturePrediction = () => (
    <div>
      <h3>3-Day Future Prediction</h3>
      {futurePredictionData.forecast.forecastday.map((day) => (
        <div key={day.date}>
          <p>{day.date}</p>
          <p>{day.day.condition.text}</p>
          <p>
            {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
          </p>
          <p>Wind Speed: {day.day.maxwind_kph} km/h</p>
        </div>
      ))}
    </div>
  );
  console.log({
    "weather Data": weatherData,
    "forecast Data": forecastData,
    "future Prediction Data": futurePredictionData,
  });

  return (
    <div>
      {renderCurrentWeather()}
      {/* {renderForecast()} */}
      {/* {renderFuturePrediction()} */}
    </div>
  );
};

export default Weather;
