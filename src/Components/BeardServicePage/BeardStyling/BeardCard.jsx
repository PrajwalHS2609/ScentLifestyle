import React from "react";
import "./BeardStyle.css";

const BeardCard = (props) => {
  return (
    <div className="beardStyleCardContainer">
      <div className="beardStyleCardContent">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
        <h1>
          <span>
            Rs. {props.price} <span>Onward</span>
          </span>
        </h1>
      </div>
      <div className="beardStyleGoto">
        <h1>BOOK NOW</h1>
      </div>
    </div>
  );
};

export default BeardCard;
