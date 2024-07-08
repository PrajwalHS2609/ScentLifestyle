import React from "react";
import "./OfferPage.css";
import OfferBenefits from "./OfferBenefits";
import OfferTxt from "./OfferTxt";
import OfferPageContact from "./OfferPageContact";
import OfferMarquee from "./OfferMarquee";
const OfferPageContent = () => {
  return (
    <div className="offerContent">
      <h2>Get Smooth, Silky Hair with Hair Botox at SCENT Salon!</h2>
      <p>
        Say goodbye to frizzy, damaged hair! Our Hair Botox treatment at SCENT
        Salon will leave your locks feeling smooth, silky, and utterly gorgeous.
      </p>

      <OfferBenefits />
      <OfferTxt />
      <OfferMarquee />
      <OfferPageContact />
    </div>
  );
};

export default OfferPageContent;
