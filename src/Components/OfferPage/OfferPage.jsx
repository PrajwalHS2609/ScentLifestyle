import React, { useEffect } from "react";
import "./OfferPage.css";
import OfferPageMain from "./OfferPageMain";
import OfferPageContent from "./OfferPageContent";

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
        phone_conversion_number: "+91 9742232700",
      });
    };

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="offerPageContainer">
      <OfferPageMain />
      <OfferPageContent />
    </div>
  );
};

export default OfferPage;
