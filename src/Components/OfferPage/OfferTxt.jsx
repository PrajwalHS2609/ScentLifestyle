import React from "react";
import "./OfferPage.css";
const OfferTxt = () => {
  return (
    <div className="offerTxtContainer">
      <div className="offerTxtContent" id="offerTxtContent1">
        <h3>Book Now </h3>
      </div>
      <button className="offerTxtWrapper">
        <a href="https://scent.zenoti.com/webstoreNew/services">{""}</a>
        <div className="offerTxtContent" id="offerTxtContent2">
          <sup>for</sup>
          <h3>Rs.7999/-</h3>
          <sub>Get Free HairCut</sub>
        </div>
      </button>
      <div className="offerTxtContent" id="offerTxtContent3">
        <h3>on your first Hair Botoxx treatment!</h3>
      </div>
    </div>
  );
};

export default OfferTxt;
