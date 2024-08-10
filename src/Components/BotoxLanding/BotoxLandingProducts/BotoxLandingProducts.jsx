import React from "react";
import "./BotoxLandingProducts.css";
import botoxLandingProducts from "./../../../Images/botoxLandingProducts.png";
import BotoxLandingProductsHead from "./BotoxLandingProductsHead";
const BotoxLandingProducts = () => {
  return (
    <div className="botoxLandingProducts">
      <img src={botoxLandingProducts} alt="botoxLandingProducts" />
      <BotoxLandingProductsHead/>
    </div>
  );
};

export default BotoxLandingProducts;
