import React from "react";
import "./HairSalonInMeadowsImg.css";
const HairSalonInMeadowsImg = (props) => {
  return (
    <div className="hairSalonInMeadowsImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  );
};

export default HairSalonInMeadowsImg;
