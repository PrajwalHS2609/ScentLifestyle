import React from "react";
import "./OfferPage.css";
const OfferTxt = () => {
  return (
    <div className="offerTxtContainer">
      <div className="offerTxtContent" id="offerTxtContent1">
        <h3>Book Now and</h3>
      </div>
      <div className="offerTxtWrapper">
        <div className="offerTxtContent" id="offerTxtContent2">
          <sup>Get</sup>
          <h3>20%</h3>
          <sub>Off</sub>
        </div>
      </div>
      <div className="offerTxtContent" id="offerTxtContent3">
        <h3>on your first Hair Botox treatment!</h3>
      </div>
    </div>
  );
};

export default OfferTxt;
