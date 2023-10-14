import React from 'react'

function RightBarItem({logo, title, data}) {
  return (
    <div className="weather_details">
      <div className="details_icon">
        <img src={`${process.env.PUBLIC_URL}${logo}`} alt="" />
      </div>
      <div className="details_info">
        <p>{title}</p>
        <h1>{data}</h1>
      </div>
    </div>
  );
}

export default RightBarItem