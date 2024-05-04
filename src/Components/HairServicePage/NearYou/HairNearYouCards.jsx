import React from "react";
import "./HairNearYou.css";
import SalonCard from "./SalonCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HairNearYouCards = () => {
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
      <div className="hairNearYouCardContainer">
        <SalonCard
          city="Sahakar Nagar"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
          no="9740322700"
        />
        <SalonCard
          city="Lavelle Road"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
          no="9740222700"
        />
        <SalonCard
          city="Jakkur"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
          no=" 9742212700"
        />
        <SalonCard
          city="Uptown Square"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
          no="9148122700"
        />
        <SalonCard
          city="Meadows"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
          no="9686221700"
        />
        <SalonCard
          city="JP Nagar"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
          no=" 8861222700"
        />
      </div>
      <div className="respHairNearYouCardContainer">
        <Slider className="respHairCardSlider" {...settings}>
          <SalonCard
            city="Sahakar Nagar"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
            no="9740322700"
          />
          <SalonCard
            city="Lavelle Road"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
            no="9740222700"
          />
          <SalonCard
            city="Jakkur"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
            no=" 9742212700"
          />
          <SalonCard
            city="Uptown Square"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
            no="9148122700"
          />
          <SalonCard
            city="WhiteField"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
            no="9686221700"
          />
          <SalonCard
            city="JP Nagar"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
            no=" 8861222700"
          />
        </Slider>
      </div>
    </>
  );
};

export default HairNearYouCards;
