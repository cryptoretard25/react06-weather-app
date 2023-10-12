import React from 'react'
import * as utils from "../scripts/utils";

function FooterForecastHourly({time, temp, icon}) {
  return (
    <div className="forecast">
      <div className="hourly_time">{time}</div>
      <div className="hourly_temp">{temp}</div>
      <div className="hourly_icon">
        <img src={utils.getIconByCode(icon)} alt="" />
      </div>
    </div>
  );
}

export default FooterForecastHourly