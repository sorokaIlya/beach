const axios = require('axios');

export function fetchActualWeather(city) {
   return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},UA&appid=dc7ada61b156a56a0a64e27fa1e84476&units=metric`);
}
