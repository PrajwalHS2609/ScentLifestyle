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
        <h2>Nail Extensions</h2>
        <h3>Indulge in luxurious nail extensions</h3>
        <p>
          Treat yourself to stunning nails with our Limited Time Offer! For just
          Rs. 1999/-, indulge in luxurious Nail Extensions at SCENT. Elevate
          your look with perfectly crafted, long-lasting nails that make a
          statement. Don't miss out—book your appointment now!
        </p>
        <div className="offerTestingHeadContent1Button">
          <a href="*">
            <button id="offerTestingHead3button2">Book Now</button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default OfferTestingContent;
