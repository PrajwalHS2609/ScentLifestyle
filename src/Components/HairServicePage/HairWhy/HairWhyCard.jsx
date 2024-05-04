import React from "react";
import "./HairWhy.css";
const HairWhyCard = (props) => {
  return (
    <div className="hairWhyCardContainer">
      <div className="hairWhyImage">
        <img
          src={props.img}
          alt=""
        />
      </div>
      <div className="hairWhyTxt">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default HairWhyCard;
