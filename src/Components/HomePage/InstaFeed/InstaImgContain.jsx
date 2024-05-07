import React from "react";
import InstaImages from "./InstaImages";
import "./InstaFeed.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const InstaImgContain = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#cc2228",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "14px",
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
          background: "#cc2228",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          cursor: "pointer",
          // display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrowResp(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "grey",
          borderTopRightRadius: "100%",
          borderBottomRightRadius: "100%",
          cursor: "pointer",
          position: "absolute",
          zIndex:"3",
          right: "1%",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrowResp(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "grey",
          color:"red",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          cursor: "pointer",
          position: "absolute",
          zIndex:"3",
          left: "1%",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: false,
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
          nextArrow: <SampleNextArrowResp />,
          prevArrow: <SamplePrevArrowResp />,
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
    <div className="instaImgWrapper">
      <Slider {...settings} className="instaSlider">
        <div className="instaInnerSlider" >
          <InstaImages vid="https://www.instagram.com/reel/C4yET19puUB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/CzxW7ieJjD7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/CzyxnjpJqg4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C5IqNgGJak4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C49q57zJgUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C2Jbf4fpTlP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C1_n0pzpT5f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C14cntpp-QX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C1v_VEBJeAd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C1V5iflv1Sx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://www.instagram.com/reel/C1Gok7NJkHc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
      </Slider>
    </div>
  );
};

export default InstaImgContain;
