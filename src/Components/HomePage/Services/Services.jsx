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
          marginRight: "-50px",
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
          marginLeft: "-50px",
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
          marginRight: "-35px",
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
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-with-curls-makeup_144627-3577.jpg?t=st=1714755168~exp=1714758768~hmac=ae5c03f46f8e81096226ca0d255891ee211131f2a1aad1ccee8e41eb7efd1c54&w=360"
                alt="Hair"
              />
            </div>
            <h3>
              <Link to={"/hair"}>Hair</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6917.jpg?t=st=1714755203~exp=1714758803~hmac=f2383a6c257c2378ee807e3dbc2de651e646e85ceb51f95a7ca15c1e04c1a9e0&w=360"
                alt="Nails"
              />
            </div>
            <h3>
              <Link to={"/nails"}>Nails</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Facial"
              />
            </div>
            <h3>
              <Link to={"/facial"}>Facials</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beauty Essentials"
              />
            </div>
            <h3>
              <Link to={"/beauty"}>Beauty Essentials</Link>
            </h3>
          </div>

          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spa"
              />
            </div>
            <h3>
              <Link to={"/spa"}>Spa</Link>
            </h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="lashes"
              />
            </div>
            <h3>
              <Link to={"/lashes"}>Lashes</Link>
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
