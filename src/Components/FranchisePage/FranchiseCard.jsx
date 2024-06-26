import React from "react";
import "./FranchisePage.css";
const FranchiseCard = (props) => {
  return (
    <div className="franchiseCardContainer">
      <div className="franchiseCardIcon">{props.franchiseIcon}</div>
      <div className="franchiseCardTxt">
        <span>{props.contName}</span>
        <p>
          <a id="franchiseLink" href="tel:9591522700">
            {props.franchiseContact}
          </a>
        </p>
        <p>
          <a id="franchiseLink" href="mailto:franchisee@scentlifestyle.com">
            {props.franchiseMail}
          </a>
        </p>
      </div>
    </div>
  );
};

export default FranchiseCard;
