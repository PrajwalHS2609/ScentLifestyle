import React from "react";
import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "./../../../Images/left.png";
import rightArrow from "./../../../Images/right.png";
// import abstractImg from "./../../../Images/Abstract Shapes.png";
import olaplex from "./../../../Images/homePartners/olaplex.png";
import casmara from "./../../../Images/homePartners/casmara.png";
import estee from "./../../../Images/homePartners/estee_lauder.png";
import beautyGarage from "./../../../Images/homePartners/beautyGarage.jpg";
import kerastase from "./../../../Images/homePartners/kerastase.png";
import janssen from "./../../../Images/homePartners/janssen.png";
import lotus from "./../../../Images/homePartners/lotus.png";
import biosoft from "./../../../Images/homePartners/biosoft.png";
import cadiveu from "./../../../Images/homePartners/cadiveu.png";
import tenx from "./../../../Images/homePartners/3tenx.png";
import schwarzkopf from "./../../../Images/homePartners/schwarzkopf.png";
import moroccanoil from "./../../../Images/homePartners/moroccanoil.png";
import pedicalm from "./../../../Images/homePartners/pedicalm.png";
import saniolla from "./../../../Images/homePartners/saniolla.png";
import jeannot from "./../../../Images/homePartners/jeannot.png";
import skeyndor from "./../../../Images/homePartners/skeyndor.png";

const Partners = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "40px",
          width: "40px",
          cursor: "pointer",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginRight: "-25px",
          backgroundColor:"white",
          borderTopRightRadius: "14px",
          borderBottomRightRadius: "14px",
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
          height: "40px",
          width: "40px",
          cursor: "pointer",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginLeft: "-25px",
          backgroundColor:"white",
          borderTopLeftRadius: "14px",
          borderBottomLeftRadius: "14px",
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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
            <img src={olaplex} alt="olaplex" />
          </div>
          <div className="partnerSlideContainer">
            <img src={casmara} alt="casmara" />
          </div>

          <div className="partnerSlideContainer" id="estee">
            <img src={estee} alt="estee" />
          </div>

          <div className="partnerSlideContainer">
            <img src={beautyGarage} alt="beautyGarage" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={kerastase} alt="kerastase" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={tenx} alt="3tenx" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={cadiveu} alt="cadiveu" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={lotus} alt="lotus" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={janssen} alt="janssen" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={biosoft} alt="biosoft" />
          </div>

          <div className="partnerSlideContainer" id="keraste">
            <img src={schwarzkopf} alt="schwarzkopf" />
          </div>
          <div className="partnerSlideContainer" id="keraste">
            <img src={moroccanoil} alt="moroccanoil" />
          </div>
          <div className="partnerSlideContainer" id="keraste">
            <img src={pedicalm} alt="pedicalm" />
          </div>
          <div className="partnerSlideContainer" id="keraste">
            <img src={saniolla} alt="saniolla" />
          </div>
          <div className="partnerSlideContainer" id="keraste">
            <img src={jeannot} alt="jeannot" />
          </div>
          <div className="partnerSlideContainer" id="keraste">
            <img src={skeyndor} alt="skeyndor" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
