import React from "react";

// const elementStyle = {
//   border: "1px solid white",
//   padding: "20px 20px 20px 40px",
//   flex: "1",
//   width: "85%",
//   display: "flex",
//   justifyContent: "space-around",
// };

function Header({ children }) {
  return (
    <div className="header">
      {children}
    </div>
  );
}

export default Header;
