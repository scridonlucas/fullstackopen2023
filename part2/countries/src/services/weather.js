import axios from 'axios';
const api_key = process.env.REACT_APP_API_KEY;

const getWeather = (country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.name.official}&units=metric&APPID=${api_key}`;
  const request = axios.get(url);
  return request.then((response) => response.data);
};

export default { getWeather };
