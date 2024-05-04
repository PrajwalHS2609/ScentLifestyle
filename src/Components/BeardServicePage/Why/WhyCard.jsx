import React from "react";
import "./WhyBeard.css";
const WhyCard = (props) => {
  return (
    <div className="whyCardContainer">
      <div className="whyImage">
        <img
          src={props.img}
          alt=""
        />
      </div>
      <div className="whyTxt">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default WhyCard;
