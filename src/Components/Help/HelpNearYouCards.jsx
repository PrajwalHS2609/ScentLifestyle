import React from "react";
import HelpCard from "./HelpCard";
import "./HelpNearYou.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HelpNearYouCards = () => {
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
      <div className="helpNearYouCardContainer">
        <HelpCard
          city="Sahakar Nagar"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
          no="9740322700"
        />

        <HelpCard
          city="Lavelle Road"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
          no="9740222700"
        />
        <HelpCard
          city="Jakkur"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
          no=" 9742212700"
        />
        <HelpCard
          city="Uptown Square"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
          no="9148122700"
        />
        <HelpCard
          city="Meadows"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
          no="9686221700"
        />
        <HelpCard
          city="JP Nagar"
          image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
          no="88612 22700"
        />
      </div>

      <div className="respHelpNearYouCardContainer">
        <Slider className="respHelpCardSlider" {...settings}>
          <HelpCard
            city="Sahakar Nagar"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
            no=" 9740322700"
          />

          <HelpCard
            city="Lavelle Road"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
            no="9740222700"
          />
          <HelpCard
            city="Jakkur"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
            no="9742212700"
          />
          <HelpCard
            city="Uptown Square"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-1.png"
            no="9148122700"
          />
          <HelpCard
            city="Meadows"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Location-Slider-Section-2.png"
            no="9686221700"
          />
          <HelpCard
            city="JP Nagar"
            image="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-c0ad884/www.bodycraft.co.in/wp-content/uploads/Body-Craft-19-83-1-scaled-1431x994.jpg"
            no="8861222700"
          />
        </Slider>
      </div>
    </>
  );
};

export default HelpNearYouCards;
