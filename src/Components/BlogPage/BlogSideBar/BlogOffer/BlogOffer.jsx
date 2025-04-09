import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import casmaraMobile from "./../../../../Images/OfferImgs/Casmara FacialMobile.png";
import globalMobile from "./../../../../Images/OfferImgs/Global & HighlightsMobile.png";
import waxingImgMobile from "./../../../../Images/OfferImgs/waxingImgMobile.png";
// import nailsMobile from "./../../../../Images/OfferImgs/NailsMobile.png";
import "./../../BlogPage.css";

const BlogOffer = () => {
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
    <div className="blogOfferImg">
      <Slider {...settings} className="offerTestingSlider" ref={sliderRef}>
        <div className="blogOfferImgContent">
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
        <div className="blogOfferImgContent">
          <img className="mobileImg" src={globalMobile} alt="globalMobile" />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button id="btn2">BOOK NOW</button>
          </a>
        </div>
        <div className="blogOfferImgContent">
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
        {/* <div className="blogOfferImgContent">
          <img
            className="mobileImg"
            src={nailsMobile}
            alt="nailsMobile"
            loading="lazy"
          />{" "}
          <a href="https://api.whatsapp.com/send?phone=919606682700">
            <button id="btn4">BOOK NOW</button>
          </a>
        </div> */}
      </Slider>
    </div>
  );
};

export default BlogOffer;
