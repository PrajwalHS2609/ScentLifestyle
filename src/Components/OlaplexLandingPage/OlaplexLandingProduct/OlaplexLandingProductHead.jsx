import React from "react";
import "./OlaplexLandingProduct.css"
import { Link } from "react-router-dom";
const OlaplexLandingProductHead = () => {
  return (
    <div className="olaplexLandingProductsHead">
      <div className="olaplexProductsHeadContent">
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

export default OlaplexLandingProductHead;
