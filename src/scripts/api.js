import axios from "axios";
import CONSTANTS from "./CONSTANTS";

const requestCurrentLocation = async () => {
  try {
    const response = await axios.get(CONSTANTS.GEOLOCATION_REQUEST_URL);
    return response.data.city;
  } catch (error) {
    console.error(error);
    return CONSTANTS.DEFAULT_CITY;
  }
};

const requestCoords = async (city) => {
  try {
    const response = await axios.get(
      `${CONSTANTS.COORDS_REQUEST_URL}q=${city}&appid=${CONSTANTS.API_KEY}`
    );
    if (!response.data.length) {
      const response = await axios.get(
        `${CONSTANTS.COORDS_REQUEST_URL}q=${await requestCurrentLocation()}&appid=${
          CONSTANTS.API_KEY
        }`
      );
      const [{ name, lat, lon }] = response.data;
    
      return { name, lat, lon };
    } else {
      const [{ name, lat, lon }] = response.data;
      return { name, lat, lon };
    }
  } catch (error) {
    console.error(error);
  }
};

// const requestWeather = async (city, units = CONSTANTS.OPENWEATHER_UNITS) => {
//   try {
//     const response = await axios.get(
//       `${CONSTANTS.WEATHER_REQUEST_URL}q=${city}&units=${units}&APPID=${CONSTANTS.API_KEY}`
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

const requestForecast = async (city, units = CONSTANTS.OPENWEATHER_UNITS) => {
  try {
    const { name, lat, lon } = await requestCoords(city);
    const response = await axios.get(
      `${CONSTANTS.FORECAST_REQUEST_URL}lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${CONSTANTS.API_KEY}`
    );
    const { current, daily, hourly, timezone } = response.data;
    return { name, current, daily, hourly, timezone };
  } catch (error) {
    console.error(error);
    //return error.code;
  }
};

export { requestCurrentLocation, requestCoords, requestForecast };
