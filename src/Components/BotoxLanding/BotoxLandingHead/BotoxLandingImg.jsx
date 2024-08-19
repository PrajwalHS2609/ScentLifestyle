import React, { Suspense } from "react";
import "./BotoxLandingHead.css";
import BotoxLandingBanner from "./../../../Images/botoxLandingBanner.jpeg";
import mobileBanner from "./../../../Images/OfferImgs/MobileImg.png";

const BotoxLandingImg = () => {
  return (
    <div className="hairTreatmentLandingImg">
        <img
          className="deskImg"
          src={BotoxLandingBanner}
          alt="desktopOfferBanner"
        />
        <img className="mobileImg" src={mobileBanner} alt="mobileOfferBanner" />
    </div>
  );
};

export default BotoxLandingImg;
