import React from "react";
import BotoxLandingBanner from "./../../../Images/botoxLandingBanner.jpeg";
import mobileBanner from "./../../../Images/OfferImgs/MobileImg.png";
const OlaplexlandingImg = () => {
  return (
    <div className="olaplexlandingImg">
      <img
        className="deskImg"
        src={BotoxLandingBanner}
        alt="desktopOfferBanner"
      />
      <img className="mobileImg" src={mobileBanner} alt="mobileOfferBanner" />{" "}
    </div>
  );
};

export default OlaplexlandingImg;
