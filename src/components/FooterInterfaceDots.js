import React, { useEffect, useReducer, useState, useContext } from "react";
import { FooterContext } from "../context/FooterContextProvider";

function FooterInterfaceDots() {
  const initialState = [true, false, false];
  const { dotIndex, setDotIndex } = useContext(FooterContext);

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "DOT_0":
        return initialState;
      case "DOT_1":
        return [false, true, false];
      case "DOT_2":
        return [false, false, true];
      default:
        return currentState;
    }
  };

  const [dots, dispatch] = useReducer(reducer, initialState);
  // const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    dispatch({ type: `DOT_${dotIndex}` });
  }, [dotIndex]);

  const handleDotClick = (index) => () => setDotIndex(index);
  const handleLeftArrowClick = () => setDotIndex((dotIndex + dots.length - 1) % dots.length);
  const handleRightArrowClick = () => setDotIndex((dotIndex + 1) % dots.length);

  const dotsDom = dots.map((dot, index) => (
    <div
      key={index}
      className={`dot ${dot ? "dot-selected" : ""}`}
      onClick={handleDotClick(index)}
    ></div>
  ));

  return (
    <div className="change-hours">
      <div className="change change-left" onClick={handleLeftArrowClick} />
      {dotsDom}
      <div className="change change-right" onClick={handleRightArrowClick} />
    </div>
  );
}

export default FooterInterfaceDots;
