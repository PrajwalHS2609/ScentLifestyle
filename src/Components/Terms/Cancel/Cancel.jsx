import React from "react";
import CancelHead from "./CancelHead";
import CancelPara from "./CancelPara";
import "./Cancel.css";

const Cancel = () => {
  return (
    <div className="cancelContainer">
      <CancelHead />
      <CancelPara />
    </div>
  );
};

export default Cancel;
