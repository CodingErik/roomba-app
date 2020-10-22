import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 90, textAlign: "center" }}
      className="jumbotron mt-3"
    >
      {children}
    </div>
  );
}

export default Jumbotron;