import React from "react";
import "./OfferPage.css";
import OfferPageMain from "./OfferPageMain";
import OfferPageContent from "./OfferPageContent";
const OfferPage = () => {
  return (
    <div className="offerPageContainer">
      <OfferPageMain/>
      <OfferPageContent/>
    </div>
  );
};

export default OfferPage;
