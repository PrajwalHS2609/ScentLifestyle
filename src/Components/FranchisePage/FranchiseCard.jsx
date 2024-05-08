import React from "react";
import "./FranchisePage.css";
const FranchiseCard = (props) => {
  return (
    <div className="franchiseCardContainer">
      <div className="franchiseCardIcon">{props.franchiseIcon}</div>
      <div className="franchiseCardTxt">
        <span>{props.contName}</span>
        <p><a id="franchiseLink" href="">{props.franchiseContact}</a></p>
      </div>
    </div>
  );
};

export default FranchiseCard;
