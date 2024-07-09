import React from "react";
import "./OfferPage.css";
import desktopBanner from "./../../Images/OfferImgs/DesktopImg.png";
import mobileBanner from "./../../Images/OfferImgs/MobileImg.png";

const OfferPageMain = () => {
  return (
    <div className="offerPageMainContainer">
      <img className="deskImg" src={desktopBanner} alt="desktopOfferBanner" />
      <img className="mobileImg" src={mobileBanner} alt="mobileOfferBanner" />
    </div>
  );
};

export default OfferPageMain;
