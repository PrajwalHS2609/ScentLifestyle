import React from "react";
import UnisexSalonHead from "./UnisexSalonHead";
import UnisexSalonPara from "./UnisexSalonPara";
import "./UnisexSalon.css";
const UnisexSalon = () => {
  return (
    <div className="unisexSalonContainer">
      <UnisexSalonHead />
      <UnisexSalonPara />
    </div>
  );
};

export default UnisexSalon;
