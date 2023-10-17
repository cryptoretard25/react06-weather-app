import React from "react";
import * as Weather from "./Weather.js";

function FooterForecastDaily({ weekday, date, maxTemp, minTemp, icon }) {
  return (
    <div className="forecast">
      <div>{weekday}</div>
      <div>{date}</div>
      <div>
        <h1>{maxTemp}</h1>
        <p>{minTemp}</p>
      </div>
      <div className="daily_icon">
        {Weather.getWeather(icon, '3x')}
      </div>
    </div>
  );
}

export default FooterForecastDaily;
