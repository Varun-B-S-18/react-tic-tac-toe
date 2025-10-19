import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="square"
      style={{
        border: "2px solid #00FFFF",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{props.value}</h2>
    </div>
  );
};

export default Square;
