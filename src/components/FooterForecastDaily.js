import React from "react";

function FooterForecastDaily({weekday, date, maxTemp, minTemp, icon}) {
  return (
    <div className="daily-forecast">
      <div>{weekday}</div>
      <div>{date}</div>
      <div>
        <h1>{maxTemp}</h1>
        <p>{minTemp}</p>
      </div>
      <div className="daily_icon">
        <img src={icon} />
      </div>
    </div>
  );
}

export default FooterForecastDaily;
