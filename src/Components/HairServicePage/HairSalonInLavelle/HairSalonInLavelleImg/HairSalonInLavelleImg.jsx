import React from "react";
import "./HairSalonInLavelleImg.css"
const HairSalonInLavelleImg = (props) => {
  return (
    <div className="hairSalonInLavelleImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  );
};

export default HairSalonInLavelleImg;
