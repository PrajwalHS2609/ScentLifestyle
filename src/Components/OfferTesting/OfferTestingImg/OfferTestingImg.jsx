import React from "react";
import "./OfferTestingImg.css";
import happyHoursImg from "./../../../Images/OfferImgs/happyHoursImg.png";
import nailExtensionImg from "./../../../Images/OfferImgs/nailsExtensionsImg.png";
import waxingImg from "./../../../Images/OfferImgs/waxingImg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          <img src={happyHoursImg} alt="happyHoursImg" />
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button>BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img src={nailExtensionImg} alt="nailExtensionImg" />
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button>BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img src={waxingImg} alt="waxingImg" />
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button>BOOK NOW</button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default OfferTestingImg;
