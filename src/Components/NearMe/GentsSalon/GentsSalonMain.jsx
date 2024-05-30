import React from "react";
import GentsSalonHead from "./GentsSalonHead";
import GentsSalonPara from "./GentsSalonPara";
import "../NearMe.css";

const GentsSalonMain = () => {
  return (
    <div className="nearContainer">
      <GentsSalonHead />
      <GentsSalonPara />
    </div>
  );
};

export default GentsSalonMain;
