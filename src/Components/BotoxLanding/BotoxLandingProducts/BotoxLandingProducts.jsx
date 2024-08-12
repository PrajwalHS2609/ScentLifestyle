import React from "react";
import "./BotoxLandingProducts.css";
// import botoxLandingProducts from "./../../../Images/botoxLandingProducts.png";
import BotoxLandingProductsHead from "./BotoxLandingProductsHead";
import botoplexxVid from "./../../../video/Botoplexx-banner.mp4";
const BotoxLandingProducts = () => {
  return (
    <div className="botoxLandingProducts">
      <video src={botoplexxVid} autoPlay loop muted/>
      <BotoxLandingProductsHead />
    </div>
  );
};

export default BotoxLandingProducts;
