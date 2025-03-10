import React from "react";
import "./InnerCard.css";
const InnerCard = (props) => {
  return (
    <div className="innerCardContainer">
      <div className="innerCardContent">
        <h2>{props.head}</h2>
        <p>{props.para}</p>
        {/* <h1>
        <span>
          Rs. {props.price} <span>Onward</span>
        </span>
      </h1> */}
      </div>
      <div className="innerCardGoto">
        <a href="https://scent.zenoti.com/webstoreNew/services">
          <p className="innerCardPara">BOOK NOW</p>
        </a>
      </div>
    </div>
  );
};

export default InnerCard;
