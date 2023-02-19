import WeatherService from '../services/weather';
import { useState, useEffect } from 'react';

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    WeatherService.getWeather(country).then((weather) => setWeather(weather));
  }, []);

  if (!weather) {
    return null;
  }

  const icon = weather.weather[0].icon;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <h2>Weather in {country.name.official}</h2>
      <p>Temperature: {weather.main.temp} Celsius</p>
      <img src={weatherIconUrl} alt="" />
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
