import React from "react";
import LeftBarConvertItem from "./LeftBarConvertItem";
import LeftBarSearch from "./LeftBarSearch";

function LeftBar({ precipitation, city, date, time, temp, icon }) {
  return (
    <div className="left-bar">
      <h1 className="precipitation">{precipitation}</h1>
      <div>{city}</div>
      <div>{date}</div>
      <div>Time: {time}</div>
      <h1 className="temperature">{temp}</h1>
      <LeftBarConvertItem />
      <div className="weather-icon">
        <img width="100" src={icon} alt="" />
      </div>
      <LeftBarSearch />
    </div>
  );
}

export default LeftBar;
