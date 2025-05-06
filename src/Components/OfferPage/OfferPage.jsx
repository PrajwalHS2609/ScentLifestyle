import React, { Suspense, useEffect } from "react";
import "./OfferPage.css";
// import OfferPageMain from "./OfferPageMain";
import OfferPageContent from "./OfferPageContent";
import { Helmet } from "react-helmet";
const OfferPageMain = React.lazy(() => import("./OfferPageMain"));
const OfferPage = () => {
  useEffect(() => {
    // Add the gtag script to the document
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=AW-1013026110`;
    document.head.appendChild(script);

    // Configure gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-1013026110/i9WkCK6VmsMZEL6ahuMD", {
        phone_conversion_number: "+91 9606682700",
      });
    };

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="offerPageContainer">
      <Helmet>
        <title>Get Smooth, Silky Hair with Hair Botoxx at SCENT Salon!</title>
        <meta
          name="description"
          content="Say goodbye to frizzy, damaged hair! Our Hair Botoxx treatment at SCENT Salon will leave your locks feeling smooth, silky, and utterly gorgeous."
        />
        <meta
          name="keywords"
          content="Hair Botoxx, Smooth Hair, Silky Hair, Hair Repair, Hair Restoration, Frizz-Free Hair, Shine and Softness, Hair Protection."
        />
        <link rel="canonical" href="https://scentlifestyle.com/offer" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <OfferPageMain />
      </Suspense>

      <OfferPageContent />
    </div>
  );
};

export default OfferPage;
