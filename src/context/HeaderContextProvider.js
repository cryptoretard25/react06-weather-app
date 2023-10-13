import React, { createContext, useEffect, useState } from "react";
import * as utils from "../scripts/utils";

const HeaderContext = createContext();

const HeaderContextProvider = ({
  children,
  forecast,
  setForecast,
  setCurrentLocation,
  units,
  setUnits,
}) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);

  useEffect(() => {
    if (forecast) {
      setCurrentWeather(utils.getCurrentWeather(forecast, units));
      setAdditionalInfo(utils.getAdditionalInfo(forecast, units));
    }
  }, [forecast, units]);

  useEffect(() => {
    if (forecast) console.log(currentWeather, additionalInfo);
  }, [currentWeather, additionalInfo]);

  return (
    <HeaderContext.Provider
      value={{
        forecast,
        currentWeather,
        additionalInfo,
        setForecast,
        setCurrentLocation,
        units,
        setUnits,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderContextProvider };
