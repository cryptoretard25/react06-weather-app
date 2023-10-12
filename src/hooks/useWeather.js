import { useReducer, useEffect, useState } from "react";
import * as utils from "../scripts/utils";
import { requestCurrentLocation, requestForecast } from "../scripts/api";

function useWeather() {
  const [forecast, setForecast] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const location = await requestCurrentLocation();
      setCurrentLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      (async () => {
        console.log(currentLocation);
        const forecast = await requestForecast(currentLocation);
        setForecast(forecast);
      })();
    }
  }, [currentLocation]);

  useEffect(() => {
    if (forecast) console.log(forecast);
  }, [forecast]);



  return [forecast, setForecast];
}

export default useWeather;
