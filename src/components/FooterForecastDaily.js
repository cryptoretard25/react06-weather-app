import React from "react";
import * as utils from "../scripts/utils";

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
        <img src={utils.getIconByCode(icon)} alt="" />
      </div>
    </div>
  );
}

export default FooterForecastDaily;
