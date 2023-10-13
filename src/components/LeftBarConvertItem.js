import React, { useContext } from "react";
import { HeaderContext } from "../context/HeaderContextProvider";

function LeftBarConvertItem() {
  const { units, setUnits } = useContext(HeaderContext);
  const clickHandler = () => {
    setUnits((prevUnits) => !prevUnits);
  };

  return (
    <div className="convert-temp" onClick={clickHandler}>
      Display {units ? "°С" : "°F"}
    </div>
  );
}

export default LeftBarConvertItem;
