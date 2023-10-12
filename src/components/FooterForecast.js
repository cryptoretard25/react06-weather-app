import React, { useContext, useState } from "react";
import FooterForecastDaily from "./FooterForecastDaily";
import FooterForecastHourly from "./FooterForecastHourly";
import { FooterContext } from "../context/FooterContextProvider";

function FooterForecast() {
  const { activeButton, dotIndex, dailyForecast, hourlyForecast } =
    useContext(FooterContext);

  return (
    <div className="forecasts-block">
      {activeButton[0] &&
        dailyForecast &&
        dailyForecast.map((day, index) => (
          <FooterForecastDaily
            key={index}
            weekday={day.weekday}
            date={day.date}
            maxTemp={day.maxTemp}
            minTemp={day.minTemp}
            icon={day.icon}
          />
        ))}
      {activeButton[1] &&
        hourlyForecast &&
        hourlyForecast[dotIndex].map((hour, index) => (
          <FooterForecastHourly
            key={index}
            time={hour.time}
            temp={hour.temp}
            icon={hour.icon}
          />
        ))}
    </div>
  );
}

export default FooterForecast;
