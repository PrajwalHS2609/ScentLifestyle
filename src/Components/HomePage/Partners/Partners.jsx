import React from "react";
import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "./../../../Images/left.png";
import rightArrow from "./../../../Images/right.png";
// import abstractImg from "./../../../Images/Abstract Shapes.png";
import olaplex from "./../../../Images/homePartners/olaplex.png"
import casmara from "./../../../Images/homePartners/casmara.png"
import estee from "./../../../Images/homePartners/estee_lauder.jpg"
import beautyGarage from "./../../../Images/homePartners/beautyGarage.jpg"
import kerastase from "./../../../Images/homePartners/kerastase.png"


const Partners = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "white",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "14px",
          height: "40px",
          cursor: "pointer",
          color: "red",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "white",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          height: "40px",
          cursor: "pointer",
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
          marginRight: "-25px",
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
          marginLeft: "-25px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
    <div className="partnerContainer">
      {/* <img src={abstractImg} alt="" /> */}
      <div className="partnerContent" id="partnerContent1">
        <div className="partnerItem1">
          <h5>Partners</h5>
        </div>
        <div className="partnerUnderline"></div>
      </div>
      <div className="partnerContent" id="partnerContent2">
        <Slider {...settings}>
          <div className="partnerSlideContainer">
            <img
              src={olaplex}
              alt="olaplex"
            />
          </div>
          <div className="partnerSlideContainer">
            <img
              src={casmara}
              alt="casmara"
            />
          </div>

          <div className="partnerSlideContainer" id="estee">
            <img
              src={estee}
              alt="estee"
            />
          </div>

          <div className="partnerSlideContainer">
            <img
              src={beautyGarage}
              alt="beautyGarage"
            />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img
              src={kerastase}
              alt="kerastase"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
