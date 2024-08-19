import React from "react";
import "./OfferTesting.css";
import OfferTestingHead from "./OfferTestingHead";
import OfferTestingHead2 from "./OfferTestingHead2";
import OfferTestingContent from "./OfferTestingContent/OfferTestingContent";
import OfferTestingBg from "./OfferTestingBg/OfferTestingBg";
const OfferTesting = () => {
  return (
    <div className="OfferTesting">
      <OfferTestingHead2 />
      <OfferTestingHead />
      <OfferTestingContent/>
      <OfferTestingBg/>
    </div>
  );
};

export default OfferTesting;
