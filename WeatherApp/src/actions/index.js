
import axios from 'axios';
const API_KEY = 'cbf1f60a9acbc22bd89a16f28f3bd4b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city, country = 'us') {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
