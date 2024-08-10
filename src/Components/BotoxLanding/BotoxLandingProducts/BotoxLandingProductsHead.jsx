import React from "react";
import "./BotoxLandingProducts.css";
import { Link } from "react-router-dom";

const BotoxLandingProductsHead = () => {
  return (
    <div className="botoxLandingProductsHead">
      <div className="botoxProductsHeadContent">
        <h3>Haircolor, Haircare & Hair Styling Products</h3>
        <p>
          Style is at your fingertips with these Salon haircolor, haircare and
          hair styling product lines.
        </p>
        <Link to={"/shop"}>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default BotoxLandingProductsHead;
