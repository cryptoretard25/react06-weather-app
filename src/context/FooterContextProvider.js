import React, { createContext, useState } from "react";

const FooterContext = createContext();

const FooterContextProvider = ({ children }) => {
  const [dotIndex, setDotIndex] = useState(0);
  const [activeButton, setActiveButton] = useState([true, false])
  return (
    <FooterContext.Provider
      value={{ dotIndex, setDotIndex, activeButton, setActiveButton }}
    >
      {children}
    </FooterContext.Provider>
  );
};

export { FooterContext, FooterContextProvider };
