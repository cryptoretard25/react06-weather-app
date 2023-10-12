import React, { createContext, useEffect, useState } from "react";
import * as utils from "../scripts/utils";

const HeaderContext = createContext();

const HeaderContextProvider = ({
  children,
  forecast,
  setForecast,
  setCurrentLocation,
}) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);

  useEffect(() => {
    if (forecast) {
      setCurrentWeather(utils.getCurrentWeather(forecast));
      setAdditionalInfo(utils.getAdditionalInfo(forecast));
    }
  }, [forecast]);

  useEffect(()=>{
    if(forecast) console.log(currentWeather, additionalInfo)
  }, [currentWeather, additionalInfo])

  return (
    <HeaderContext.Provider value={{ currentWeather , additionalInfo, setForecast, setCurrentLocation}}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderContextProvider };
