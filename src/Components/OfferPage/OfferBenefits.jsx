import React from "react";
import "./OfferPage.css";
import repair from "./../../Images/Repair.jpg";
import shine from "./../../Images/Shine.jpg";
import frizz from "./../../Images/Frizz.jpg";
import protection from "./../../Images/Protection.jpg";

const OfferBenefits = () => {
  return (
    <div className="offerBenefits">
      <div className="offer">
        <div className="offerImgContainer">
          <div className="offerImgContent">
            <img src={repair} alt="" />
          </div>
        </div>
        <div className="offerHead">
          <h3>Repairs and restores damaged hair</h3>
        </div>
      </div>
      <div className="offer">
        <div className="offerImgContainer">
          <div className="offerImgContent">
            <img src={frizz} alt="" />
          </div>
        </div>
        <div className="offerHead">
          <h3>Reduces frizz and flyaways</h3>
        </div>
      </div>
      <div className="offer">
        <div className="offerImgContainer">
          <div className="offerImgContent">
            <img src={shine} alt="" />
          </div>
        </div>
        <div className="offerHead">
          <h3>Enhances shine and softness</h3>
        </div>
      </div>
      <div className="offer">
        <div className="offerImgContainer">
          <div className="offerImgContent">
            <img src={protection} alt="" />
          </div>
        </div>
        <div className="offerHead">
          <h3>Protects against future damage</h3>
        </div>
      </div>
    </div>
  );
};

export default OfferBenefits;
