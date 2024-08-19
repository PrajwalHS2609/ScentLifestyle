import React from "react";
import OfferTestingContentImg from "./OfferTestingContentImg";
import "./OfferTestingContent.css";
const OfferTestingContent = () => {
  return (
    <div className="offerTestingContent">
      <div className="offerTestingContent1">
        <OfferTestingContentImg />
      </div>
      <div className="offerTestingContent2">
        <h2>Hairdressers, Grooming</h2>
        <h3>Experts in men's hair, skin care, manicure & massage</h3>
        <p>
          We are a combination of having highly skilled, knowledgable. Experts
          in men's hair, skin care, manicure & massage
        </p>
      </div>
    </div>
  );
};

export default OfferTestingContent;
