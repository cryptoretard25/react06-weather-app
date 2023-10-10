import React from "react";

// const elementStyle = {
//   border: "1px solid white",
//   padding: "20px 40px 40px 40px",
//   width: " 85%",
//   height: "300px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "30px",
// };

function Footer({ children }) {
  return (
    <div className="footer">
      {children}
    </div>
  );
}

export default Footer;
