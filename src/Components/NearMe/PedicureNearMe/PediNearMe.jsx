import React from "react";
import ComprehensivePedi from "./ComprehensivePedi";
import PediNearHead from "./PediNearHead";
import "../NearMe.css"

const PediNearMe = () => {
  return (
    <div className="nearContainer">
      <PediNearHead />
      <ComprehensivePedi />
    </div>
  );
};

export default PediNearMe;
