import React from 'react'
import * as Weather from "./Weather.js";

function FooterForecastHourly({time, temp, icon}) {
  return (
    <div className="forecast">
      <div className="hourly_time">{time}</div>
      <div className="hourly_temp">{temp}</div>
      <div className="hourly_icon">
        {Weather.getWeather(icon, '3x')}
      </div>
    </div>
  );
}

export default FooterForecastHourly