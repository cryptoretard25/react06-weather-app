import React, { useContext } from "react";
import LeftBarConvertItem from "./LeftBarConvertItem";
import LeftBarSearch from "./LeftBarSearch";
import { HeaderContext } from "../context/HeaderContextProvider";
import * as utils from "../scripts/utils";

function LeftBar() {
  const {currentWeather} = useContext(HeaderContext)

  return (
    <div className="left-bar">
      {currentWeather && (
        <>
          <h1 className="precipitation">{currentWeather.description}</h1>
          <div>{currentWeather.city}</div>
          <div>{currentWeather.date}</div>
          <div>Time: {currentWeather.time}</div>
          <h1 className="temperature">{currentWeather.temp}</h1>
          <LeftBarConvertItem />
          <div className="weather-icon">
            <img width="100" src={utils.getIconByCode(currentWeather.icon)} alt="" />
          </div>
          <LeftBarSearch />
        </>
      )}
    </div>
  );
}

export default LeftBar;
