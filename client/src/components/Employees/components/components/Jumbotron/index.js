import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 10, textAlign: "center", color:"bg-warning"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
