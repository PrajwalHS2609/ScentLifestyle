import React from "react";
import "./OfferPage.css";
import NavBg from './../NavBg/NavBg';
import OfferPageMain from "./OfferPageMain";
import OfferPageContent from "./OfferPageContent";
const OfferPage = () => {
  return (
    <div className="offerPageContainer">
      <NavBg />
      <OfferPageMain/>
      <OfferPageContent/>
    </div>
  );
};

export default OfferPage;
