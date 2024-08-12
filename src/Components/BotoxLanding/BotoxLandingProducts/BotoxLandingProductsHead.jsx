import React from "react";
import "./BotoxLandingProducts.css";
import beautyGarage from "./../../../Images/beautyGarage.png";

const BotoxLandingProductsHead = () => {
  return (
    <div className="botoxLandingProductsHead">
      <div className="botoxProductsHeadContent">
        <img src={beautyGarage} alt="beautyGarage" />
        <h3>Botoplexx</h3>
        <p>For Dry, Brittle & Color treated hair</p>
        <p className="paraTxt">
          <p>
            Paint your Hair! <br />
            Paint it Red & Blue, with
            <br />
          </p>
          <span> ZERO WORRIES! </span>
        </p>
        <a href="https://api.whatsapp.com/send?phone=919742232700">
          <button>Book in Appointment</button>
        </a>
      </div>
    </div>
  );
};

export default BotoxLandingProductsHead;
