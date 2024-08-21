import React from "react";
import "./OfferTestingImg.css";
// import happyHoursImg from "./../../../Images/OfferImgs/happyHoursImg.png";
// import nailExtensionImg from "./../../../Images/OfferImgs/nailsExtensionsImg.png";
// import waxingImg from "./../../../Images/OfferImgs/waxingImg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import happyHoursImg from "./../../../Images/OfferImgs/happyHoursImg.png";
import happyHoursImgMobile from "./../../../Images/OfferImgs/Happy Hours Mobile.png";


import nailsExtensionsImg from "./../../../Images/OfferImgs/nailsExtensionsImg.png";
import nailsExtensionsImgMobile from "./../../../Images/OfferImgs/nailsExtensionsImgMobile.png";
import waxingImg from "./../../../Images/OfferImgs/waxingImg.png";
import waxingImgMobile from "./../../../Images/OfferImgs/waxingImgMobile.png";
// import leftArrow from "./../../../Images/left.png";
// import rightArrow from "./../../../Images/right.png";
// import { Link } from "react-router-dom";
const OfferTestingImg = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enables infinite scrolling
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Speed of autoplay (ms)
    arrows: false, // Disables the arrows
  };

  return (
    <div className="OfferTestingImg">
      <Slider {...settings} className="offerTestingSlider">
        <div className="OfferTestingImgContent">
          <img className="deskImg" src={happyHoursImg} alt="happyHoursImg" />
          <img
            className="mobileImg"
            src={happyHoursImgMobile}
            alt="happyHoursImgMobile"
          />
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button>BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img className="deskImg" src={nailsExtensionsImg} alt="nailsExtensionsImg" />
          <img
            className="mobileImg"
            src={nailsExtensionsImgMobile}
            alt="nailsExtensionsImgMobile"
          />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button>BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img className="deskImg" src={waxingImg} alt="waxingImg" />
          <img
            className="mobileImg"
            src={waxingImgMobile}
            alt="waxingImgMobile"
          />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button>BOOK NOW</button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default OfferTestingImg;
