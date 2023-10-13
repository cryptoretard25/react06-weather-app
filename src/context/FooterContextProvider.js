import React, { createContext, useEffect, useState } from "react";
import * as utils from '../scripts/utils'

const FooterContext = createContext();

const FooterContextProvider = ({ children, forecast, units }) => {
  const [dotIndex, setDotIndex] = useState(0);
  const [activeButton, setActiveButton] = useState([true, false]);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    if(forecast){
    setDailyForecast(utils.getDailyForecast(forecast, units));
    setHourlyForecast(utils.getHourlyForecast(forecast, units));}
  }, [forecast, units]);

  // useEffect(()=>{
  //   if(forecast) console.log(dailyForecast, hourlyForecast)
  // }, [dailyForecast, hourlyForecast])

  return (
    <FooterContext.Provider
      value={{ dotIndex, setDotIndex, activeButton, setActiveButton, dailyForecast, hourlyForecast }}
    >
      {children}
    </FooterContext.Provider>
  );
};

export { FooterContext, FooterContextProvider };
