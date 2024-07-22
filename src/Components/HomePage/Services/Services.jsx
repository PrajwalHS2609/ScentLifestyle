import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ServiceHead from "./ServiceHead";
import leftArrow from "./../../../Images/left.png";
import rightArrow from "./../../../Images/right.png";
import hair from "./../../../Images/homeService/homeHair.jpg";
import facial from "./../../../Images/homeService/homeFacial.jpg";
import spa from "./../../../Images/homeService/homeSpa.jpg";
import nails from "./../../../Images/homeService/homeNails.jpg";
import beautyEssentials from "./../../../Images/homeService/homeBeauty.jpg";
import lashes from "./../../../Images/homeService/homeLashes.jpg";
import bride from "./../../../Images/ServicePage/Bridal Package.png";
import micro from "./../../../Images/ServicePage/eyebrowBlading.jpg";

const Services = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "60px",
          width: "60px",
          cursor: "pointer",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginRight: "-40px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "60px",
          width: "60px",
          cursor: "pointer",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginLeft: "-40px",
        }}
        onClick={onClick}
      />
    );
  }
  function RespSampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "50px",
          width: "50px",
          cursor: "pointer",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginRight: "-30px",
        }}
        onClick={onClick}
      />
    );
  }
  function RespSamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "50px",
          width: "50px",
          cursor: "pointer",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginLeft: "-35px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <RespSampleNextArrow />,
          prevArrow: <RespSamplePrevArrow />,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="serviceContainer">
      <ServiceHead />
      <div className="serviceContent" id="serviceContent2">
        <Slider {...settings}>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={hair} alt="Hair" />
            </div>
            <h3>
              <Link to={"/hair"}>Hair</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={nails} alt="Nails" />
            </div>
            <h3>
              <Link to={"/nails"}>Nails</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={facial} alt="Facial" />
            </div>
            <h3>
              <Link to={"/facial"}>Facials</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={beautyEssentials} alt="Beauty Essentials" />
            </div>
            <h3>
              <Link to={"/beauty"}>Beauty Essentials</Link>
            </h3>
          </div>

          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={spa} alt="Spa" />
            </div>
            <h3>
              <Link to={"/spa"}>Spa</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={lashes} alt="lashes" />
            </div>
            <h3>
              <Link to={"/lashes"}>Lashes</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={bride} alt="bride" />
            </div>
            <h3>
              <Link to={"/bridal-makeup"}>Bridal Makeup</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img src={micro} alt="micro" />
            </div>
            <h3>
              <Link to={"/eyebrow-microblading"}>Eyebrow Microblading</Link>
            </h3>
          </div>
        </Slider>
      </div>
      <div className="serviceContent" id="serviceContent3">
        <Link to={"/service"}>
          <pre>Explore All Our Services </pre>
        </Link>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="serviceIcon"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Services;
