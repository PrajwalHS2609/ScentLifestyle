import React, { Suspense } from "react";
import "./OfferTesting.css";
import { Helmet } from "react-helmet";
// import OfferTestingHead from "./OfferTestingHead";
// import OfferTestingHead2 from "./OfferTestingHead2";
// import OfferTestingContent from "./OfferTestingContent/OfferTestingContent";
// import OfferTestingImg from "./OfferTestingImg/OfferTestingImg";
const OfferTestingImg = React.lazy(() =>
  import("./OfferTestingImg/OfferTestingImg")
);

const OfferTesting = () => {
  return (
    <div className="OfferTesting">
      <Helmet>
        <title>SCENT Offer</title>
        <link rel="canonical" href="https://scentlifestyle.com/offer" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <OfferTestingImg />
      </Suspense>
    </div>
  );
};

export default OfferTesting;
