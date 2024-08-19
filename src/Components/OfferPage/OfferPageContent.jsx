import React, { Suspense } from "react";
import "./OfferPage.css";
// import OfferBenefits from "./OfferBenefits";
import OfferTxt from "./OfferTxt";
import OfferPageContact from "./OfferPageContact";
import OfferMarquee from "./OfferMarquee";
const OfferBenefits = React.lazy(() => import("./OfferBenefits"));
const OfferPageContent = () => {
  return (
    <div className="offerContent">
      <h2>Get Smooth, Silky Hair with Hair Botoxx at SCENT Salon!</h2>
      <p>
        Say goodbye to frizzy, damaged hair! Our Hair Botoxx treatment at SCENT
        Salon will leave your locks feeling smooth, silky, and utterly gorgeous.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <OfferBenefits />
      </Suspense>

      <OfferTxt />
      <OfferMarquee />
      <OfferPageContact />
    </div>
  );
};

export default OfferPageContent;
