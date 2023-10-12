import React, { useContext, useState } from "react";
import FooterInterfaceDots from "./FooterInterfaceDots";
import { FooterContext } from "../context/FooterContextProvider";

function FooterInterface() {
  const { activeButton, setActiveButton } = useContext(FooterContext);

  const handleDailyClick = () => {
    setActiveButton([true, false]);
  };

  const handleHourlyClick = () => {
    setActiveButton([false, true]);
  };

  const dots = activeButton[1] && <FooterInterfaceDots />;

  return (
    <div className="interface">
      <div
        className={`interface-btn ${activeButton[0] ? "selected" : ""}`}
        id="daily"
        onClick={handleDailyClick}
      >
        Daily
      </div>
      <div
        className={`interface-btn ${activeButton[1] ? "selected" : ""}`}
        id="hourly"
        onClick={handleHourlyClick}
      >
        Hourly
      </div>
      {dots}
    </div>
  );
}

export default FooterInterface;
