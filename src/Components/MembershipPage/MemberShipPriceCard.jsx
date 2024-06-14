import React from "react";
import "./MembershipPage.css";

const MemberShipPriceCard = (props) => {
  return (
    <div className="membershipCardContainer">
      <div className="membershipCardTxt">
        <h2>{props.txt}</h2>
        <h4>(inclusive of tax)</h4>
      </div>
      <div className="membershipPrice">
        <h3>{props.rupee}</h3>
        <pre> </pre>
        <h3>{props.price1}</h3>
      </div>
      <div className="membershipPrice">
        <h3>{props.rupee}</h3>
        <pre> </pre>
        <h3>{props.price2}</h3>
      </div>
      <div className="membershipPrice">
        <h3>{props.rupee}</h3>
        <pre> </pre>
        <h3>{props.price3}</h3>
      </div>
      <div className="membershipPrice">
        <h3>{props.rupee}</h3>
        <pre> </pre>
        <h3>{props.price4}</h3>
      </div>
    </div>
  );
};

export default MemberShipPriceCard;
