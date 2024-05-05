import React from "react";
import "./ServiceNearYou.css";
import SalonCard from "./SalonCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sahakar from "./../../../Images/sahakaranagar.jpg";
import Lavelle from "./../../../Images/lavelle road.jpg";
import Jakkur from "./../../../Images/jakkur.jpg";
import varthur from "./../../../Images/Varthur - whitefield.jpg";
import Seege from "./../../../Images/seegehalli - whitefield.jpg";
import jp from "./../../../Images/JP Nagar.jpg";
const ServiceNearYouCards = () => {
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
        },
      },
    ],
  };
  return (
    <>
      <div className="serviceNearYouCardContainer">
        <SalonCard city="Sahakar Nagar" image={Sahakar} no="9740322700" />

        <SalonCard city="Lavelle Road" image={Lavelle} no="9740222700" />
        <SalonCard city="Jakkur" image={Jakkur} no=" 9742212700" />
        <SalonCard city="Uptown Square" image={varthur} no="9148122700" />
        <SalonCard city="Meadows" image={Seege} no="9686221700" />
        <SalonCard city="JP Nagar" image={jp} no="88612 22700" />
      </div>
      <div className="respServiceNearYouCardContainer">
        <Slider className="respServiceCardSlider" {...settings}>
          <SalonCard city="Sahakar Nagar" image={Sahakar} no="9740322700" />

          <SalonCard city="Lavelle Road" image={Lavelle} no="9740222700" />
          <SalonCard city="Jakkur" image={Jakkur} no=" 9742212700" />
          <SalonCard city="Uptown Square" image={varthur} no="9148122700" />
          <SalonCard city="Meadows" image={Seege} no="9686221700" />
          <SalonCard city="JP Nagar" image={jp} no="88612 22700" />
        </Slider>
      </div>
    </>
  );
};

export default ServiceNearYouCards;
