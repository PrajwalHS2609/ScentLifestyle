import React from "react";
import "./BotoxLandingProducts.css";
import { Link } from "react-router-dom";
import beautyGarage from "./../../../Images/beautyGarage.png";
import TypeWriter from "./TypeWriter";

const BotoxLandingProductsHead = () => {
  return (
    <div className="botoxLandingProductsHead">
      <div className="botoxProductsHeadContent">
        <img src={beautyGarage} alt="beautyGarage" />
        <h3>Botoplexx</h3>
        <p>For Dry, Brittle & Color treated hair</p>
        <p className="paraTxt">
          Paint your Hair! <br />
          Paint it Red & Blue
          <br />
          <span>with ZERO WORRIES! </span>
        </p>
        <Link to={"/shop"}>
          <button>Book in Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default BotoxLandingProductsHead;
