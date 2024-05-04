import React from "react";
import "./Shipping.css";
const ShippingPara = () => {
  return (
    <div className="shipParaContainer">
      <ul>
        <li>Shipping within India is free for all orders above Rs.500.</li>
        <li>A flat fee of Rs.50 is applied to all orders below Rs.500.</li>
        <li>Orders typically take 2-7 days for delivery once shipped.</li>
        <li>
          We do not currently offer international shipping. Please contact our
          customer care for further assistance.
        </li>
      </ul>
    </div>
  );
};

export default ShippingPara;
