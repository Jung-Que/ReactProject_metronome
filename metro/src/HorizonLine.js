import React from "react";

const HorizonLine = ({ text }) => { //빈 줄
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        
        lineHeight: "0.1em",
        margin: "30px 0 0px",
      }}
    >
      <span style={{ background: "", padding: "0 10px" }}></span>
    </div>
  );
};

export default HorizonLine;