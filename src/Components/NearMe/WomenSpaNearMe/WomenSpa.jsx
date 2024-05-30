import React from "react";
import "../NearMe.css";
import WomenSpaPara from "./WomenSpaPara";
import WomenSpaHead from "./WomenSpaHead";

const WomenSpa = () => {
  return (
    <div className="nearContainer">
      <WomenSpaHead />
      <WomenSpaPara />
    </div>
  );
};

export default WomenSpa;
