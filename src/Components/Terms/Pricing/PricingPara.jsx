import React from "react";
import "./Pricing.css";

const PricingPara = () => {
  return (
    <div className="pricingParaContainer">
      <ul>
        <li>
          Product prices listed are at the current MRP, but these are subject to
          change without prior notice.
        </li>
        <li>All prices on this website are processed in Indian Rupees.</li>
        <li>
          All orders are acknowledged at the current pricing. We will bill at
          the price in effect at the time of shipping.
        </li>
        <li>Our products are liable for GST in India.</li>
      </ul>
    </div>
  );
};

export default PricingPara;
