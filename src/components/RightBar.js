import React, { useContext } from "react";
import RightBarItem from "./RightBarItem";
import { HeaderContext } from "../context/HeaderContextProvider";
import * as Weather from './Weather.js'

function RightBar() {
  const {additionalInfo} = useContext(HeaderContext)

  return (
    <div className="right-bar">
      {additionalInfo && (
        <>
          <RightBarItem
            logo={<Weather.Termometer size={"3x"} />}
            title={"Feels Like"}
            data={additionalInfo.feelsLike}
          />
          <RightBarItem
            logo={<Weather.Umbrella size={"3x"} />}
            title={"Humidity"}
            data={additionalInfo.humidity}
          />
          <RightBarItem
            logo={<Weather.CloudRain size={"3x"} />}
            title={"Chance of Rain"}
            data={additionalInfo.rainChance}
          />
          <RightBarItem
            logo={<Weather.Wind size={"3x"} />}
            title={"Wind speed"}
            data={additionalInfo.windSpeed}
          />
        </>
      )}
    </div>
  );
}

export default RightBar;
