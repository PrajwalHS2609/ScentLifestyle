import React from "react";
import "./OfferTesting.css";
import OfferTestingHead from "./OfferTestingHead";
import OfferTestingHead2 from "./OfferTestingHead2";
import OfferTestingContent from "./OfferTestingContent/OfferTestingContent";
const OfferTesting = () => {
  return (
    <div className="OfferTesting">
      <OfferTestingHead />
      <OfferTestingHead2 />
      <OfferTestingContent/>
    </div>
  );
};

export default OfferTesting;
