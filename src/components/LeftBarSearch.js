import React, { useContext, useState } from "react";
import { HeaderContext } from "../context/HeaderContextProvider";

function LeftBarSearch() {
  const { setCurrentLocation } = useContext(HeaderContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    setCurrentLocation(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      setCurrentLocation(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="search-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        type="text"
        name="search"
        placeholder="Search..."
      />
      <div className="search-btn" onClick={handleSearchClick}>
        <img src="./imgs/search-icon.png" alt="" />
      </div>
    </div>
  );
}

export default LeftBarSearch;
