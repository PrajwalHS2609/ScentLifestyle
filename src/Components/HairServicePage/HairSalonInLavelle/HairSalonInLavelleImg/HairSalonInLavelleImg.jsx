import React from "react";
import hairJpImg from "./../../../../Images/JP_Nagar/Hair.png";
import "./HairSalonInLavelleImg.css"
const HairSalonInLavelleImg = () => {
  return (
    <div className="hairSalonInLavelleImg">
      <img src={hairJpImg} alt="hairInLavelleImg" loading="lazy" />
    </div>
  );
};

export default HairSalonInLavelleImg;
