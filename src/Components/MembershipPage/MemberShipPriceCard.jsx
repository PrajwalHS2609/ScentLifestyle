import React from "react";
import "./MembershipPage.css";

const MemberShipPriceCard = (props) => {
  return (
    <div className="membershipCardContainer">
      <div className="membershipCardTxt">
        <h1>{props.txt}</h1>
        <h4>(inclusive of tax)</h4>
      </div>
      <div className="membershipPrice">
        <h2>{props.rupee}</h2>
        <pre> </pre>
        <h2>{props.price1}</h2>
      </div>
      <div className="membershipPrice">
        <h2>{props.rupee}</h2>
        <pre> </pre>
        <h2>{props.price2}</h2>
      </div>
      <div className="membershipPrice">
        <h2>{props.rupee}</h2>
        <pre> </pre>
        <h2>{props.price3}</h2>
      </div>
      <div className="membershipPrice">
        <h2>{props.rupee}</h2>
        <pre> </pre>
        <h2>{props.price4}</h2>
      </div>
    </div>
  );
};

export default MemberShipPriceCard;
