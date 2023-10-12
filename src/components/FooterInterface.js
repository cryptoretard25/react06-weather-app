import React, { useState } from "react";
import FooterInterfaceDots from "./FooterInterfaceDots";

function FooterInterface() {
  const [active, setActive] = useState({ daily: true, hourly: false });

  const isActive = (state, id) => {
    return state[id] ? "selected" : "";
  };

  const handleDailyClick = (e) => {
    const id = e.target.id;
    if (id === "daily") setActive({ [id]: true, hourly: false });
    else setActive({ [id]: true, daily: false });
  };

  const dots = active.hourly && <FooterInterfaceDots />;

  return (
    <div className="interface">
      <div
        className={`interface-btn ${isActive(active, "daily")}`}
        id="daily"
        onClick={handleDailyClick}
      >
        Daily
      </div>
      <div
        className={`interface-btn ${isActive(active, "hourly")}`}
        id="hourly"
        onClick={handleDailyClick}
      >
        Hourly
      </div>
      {dots}
    </div>
  );
}

export default FooterInterface;
