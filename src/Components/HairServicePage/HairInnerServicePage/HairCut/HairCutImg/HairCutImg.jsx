import React from "react";
import haircutImg from "./../../../../../Images/HairSalonInnerPage/Hair Cut & Stylist Services.png";
import "./HairCutImg.css";

const HairCutImg = () => {
  return (
    <div className="haircutImg">
      <img src={haircutImg} alt="haircutImg" />
    </div>
  );
};

export default HairCutImg;
