import WeatherService from '../services/weather';

const Weather = ({ country }) => {
  WeatherService.getWeather(country).then((weather) => console.log(weather));
  return (
    <div>
      <h2>Weather is {country.name.official}</h2>
    </div>
  );
};

export default Weather;
