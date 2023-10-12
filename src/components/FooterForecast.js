import React, { useContext } from "react";
import FooterForecastDaily from "./FooterForecastDaily";
import { FooterContext } from "../context/FooterContextProvider";

function FooterForecast() {
  const { activeButton } = useContext(FooterContext);
  return (
    <div className="forecasts-block">
      {activeButton[0] && (
        <>
          <FooterForecastDaily
            weekday={"Friday"}
            date={"Oct 13"}
            maxTemp={"13 °C"}
            minTemp={"5 °C"}
            icon={"./imgs/rainy.svg"}
          />
          <FooterForecastDaily
            weekday={"Saturday"}
            date={"Oct 14"}
            maxTemp={"15 °C"}
            minTemp={"9 °C"}
            icon={"./imgs/rainy.svg"}
          />
        </>
      )}
      {activeButton[1] && (
        <>
          <FooterForecastDaily
            weekday={"Sunday"}
            date={"Oct 15"}
            maxTemp={"10 °C"}
            minTemp={"6 °C"}
            icon={"./imgs/cloudy.svg"}
          />
        </>
      )}
    </div>
  );
}

export default FooterForecast;
