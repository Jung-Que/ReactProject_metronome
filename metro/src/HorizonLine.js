import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "15px solid #429e42",
        lineHeight: "0.1em",
        margin: "5px 0 5px",
      }}
    >
      <span style={{ background: "", padding: "0 10px" }}></span>
    </div>
  );
};

export default HorizonLine;