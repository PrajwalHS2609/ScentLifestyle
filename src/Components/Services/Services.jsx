import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Services = () => {
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
          background: "#cc2228",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "14px",
          height: "40px",
          cursor: "pointer",
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
          background: "#cc2228",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          height: "40px",
          cursor: "pointer",
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
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="serviceContainer">
      <div className="serviceContent" id="serviceContent1">
        <p>Our</p>
        <pre>Services</pre>
      </div>
      <div className="serviceContent" id="serviceContent2">
        <Slider {...settings}>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-with-curls-makeup_144627-3577.jpg?t=st=1714755168~exp=1714758768~hmac=ae5c03f46f8e81096226ca0d255891ee211131f2a1aad1ccee8e41eb7efd1c54&w=360"
                alt="Hair"
              />
            </div>
            <h3>Hair</h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6917.jpg?t=st=1714755203~exp=1714758803~hmac=f2383a6c257c2378ee807e3dbc2de651e646e85ceb51f95a7ca15c1e04c1a9e0&w=360"
                alt="Nails"
              />
            </div>
            <h3>Nails</h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4247.jpg?t=st=1714755235~exp=1714758835~hmac=d3230df8acd992ef6023f397c8a650764f817b81178e01600500d87762d5dbc4&w=996"
                alt="Facial"
              />
            </div>
            <h3>Facials</h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/side-view-young-woman-using-serum_23-2149887532.jpg?t=st=1714755326~exp=1714758926~hmac=dc2c802166ff6b3565cde76ed3c2f25b4eba2230daba301b09a9bc5148135cd4&w=1060"
                alt="Beauty Essentials"
              />
            </div>
            <h3>Beauty Essentials</h3>
          </div>
        
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg?t=st=1714755365~exp=1714758965~hmac=af7a66fc4cd1c002abdb3b4328f0c34e3d7c811db75cedd38150ecccb89917ef&w=996 "
                alt="Spa"
              />
            </div>
            <h3>Spa</h3>
          </div>
          <div className="serviceSlideContainer">
            <div className="serviceSlideContent">
              <img
                src="https://img.freepik.com/free-photo/closeup-woman-s-eye-with-beautiful-fashion-bright-makeup_186202-7965.jpg?t=st=1714755422~exp=1714759022~hmac=0b84b33e30d54be8618dbee89a96df76811e557534ea32d2d5aeceb530168047&w=996"
                alt="lashes"
              />
            </div>
            <h3>Lashes</h3>
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
