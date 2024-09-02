import React, { useEffect, useRef } from "react";
import "./OfferTestingImg.css";
// import happyHoursImg from "./../../../Images/OfferImgs/happyHoursImg.png";
// import nailExtensionImg from "./../../../Images/OfferImgs/nailsExtensionsImg.png";
// import waxingImg from "./../../../Images/OfferImgs/waxingImg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import happyHoursImg from "./../../../Images/OfferImgs/happyHoursImg.png";
// import happyHoursImgMobile from "./../../../Images/OfferImgs/Happy Hours Mobile.png";
// import nailsExtensionsImg from "./../../../Images/OfferImgs/nailsExtensionsImg.png";
// import nailsExtensionsImgMobile from "./../../../Images/OfferImgs/nailsExtensionsImgMobile.png";
import casmara from "./../../../Images/OfferImgs/Casmara Facial.png";
import casmaraMobile from "./../../../Images/OfferImgs/Casmara FacialMobile.png";
import global from "./../../../Images/OfferImgs/Global & Highlights.png";
import globalMobile from "./../../../Images/OfferImgs/Global & HighlightsMobile.png";
import hairBeauty from "./../../../Images/OfferImgs/Hair & Beauty Nails.png";
import hairBeautyMobile from "./../../../Images/OfferImgs/Hair & Beauty NailsMobile.png";
import waxingImg from "./../../../Images/OfferImgs/waxingImg.png";
import waxingImgMobile from "./../../../Images/OfferImgs/waxingImgMobile.png";
// import leftArrow from "./../../../Images/left.png";
// import rightArrow from "./../../../Images/right.png";
// import { Link } from "react-router-dom";
const OfferTestingImg = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enables infinite scrolling
    speed: 2000, // Transition speed (ms)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 5000, // Speed of autoplay (ms)
    arrows: false, // Disables the arrows
    pauseOnHover: false, // Continues autoplay even on hover

  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);
  return (
    <div className="OfferTestingImg">
      <Slider {...settings} className="offerTestingSlider" ref={sliderRef}>
        <div className="OfferTestingImgContent">
          <img className="deskImg" src={casmara} alt="casmara" loading="lazy" />
          <img
            className="mobileImg"
            src={casmaraMobile}
            alt="casmaraMobile"
            loading="lazy"
          />
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button id="btn1">BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img className="deskImg" src={global} alt="global" loading="lazy" />
          <img
            className="mobileImg"
            src={globalMobile}
            alt="globalMobile"
          />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button id="btn2">BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img
            className="deskImg"
            src={waxingImg}
            alt="waxingImg"
            loading="lazy"
          />
          <img
            className="mobileImg"
            src={waxingImgMobile}
            alt="waxingImgMobile"
            loading="lazy"
          />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button id="btn3">BOOK NOW</button>
          </a>
        </div>
        <div className="OfferTestingImgContent">
          <img
            className="deskImg"
            src={hairBeauty}
            alt="hairBeauty"
            loading="lazy"
          />
          <img
            className="mobileImg"
            src={hairBeautyMobile}
            alt="hairBeautyMobile"
            loading="lazy"
          />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button id="btn4">BOOK NOW</button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default OfferTestingImg;
