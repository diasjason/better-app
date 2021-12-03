import React from "react";
import { useSelector } from "react-redux";

const BlinkingComponent = (props) => {
  const { value } = useSelector((state) => state.highlight);
  return (
    <div className={`element${value ? " highlight" : ""}`}>{props.text}</div>
  );
};

export default BlinkingComponent;
