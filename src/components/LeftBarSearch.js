import React from 'react'

function LeftBarSearch() {
  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search..."
      />
      <div className="search-btn">
        <img src="./imgs/search-icon.png" alt="" />
      </div>
    </div>
  );
}

export default LeftBarSearch;