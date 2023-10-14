import React, { useContext } from "react";
import RightBarItem from "./RightBarItem";
import { HeaderContext } from "../context/HeaderContextProvider";

function RightBar() {
  const {additionalInfo} = useContext(HeaderContext)

  return (
    <div className="right-bar">
      {additionalInfo && (
        <>
          <RightBarItem
            logo={"/imgs/thermo.svg"}
            title={"Feels Like"}
            data={additionalInfo.feelsLike}
          />
          <RightBarItem
            logo={"/imgs/humidity.svg"}
            title={"Humidity"}
            data={additionalInfo.humidity}
          />
          <RightBarItem
            logo={"/imgs/rainy.svg"}
            title={"Chance of Rain"}
            data={additionalInfo.rainChance}
          />
          <RightBarItem
            logo={"/imgs/wind.svg"}
            title={"Wind speed"}
            data={additionalInfo.windSpeed}
          />
        </>
      )}
    </div>
  );
}

export default RightBar;
