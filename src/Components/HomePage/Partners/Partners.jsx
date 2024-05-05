import React from "react";
import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    <div className="partnerContainer">
      <div className="partnerContent" id="partnerContent1">
        <div className="partnerItem1">
          <h1>Partners</h1>
        </div>
        <div className="partnerUnderline"></div>
      </div>
      <div className="partnerContent" id="partnerContent2">
        <Slider {...settings}>
          <div className="partnerSlideContainer">
            <img
              src="https://lh3.googleusercontent.com/proxy/U28vdrpWn5iMQm_uA9mi6Jf8gsWWe2YVvgVWu0OcxLoflRGuWNTvSq59oKSKFF-zOOwuH79zmW90bC6If8SKlnpb8k4Ci9_NX_b0C76TceAKWtfMcmlo"
              alt="olaplex"
            />
          </div>
          <div className="partnerSlideContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHvSR4841_YgvWBIBrGnO9Gkcxsi54XVhh0F9XJsscA&s"
              alt="casma"
            />
          </div>

          <div className="partnerSlideContainer" id="estee">
            <img
              src="https://logowik.com/content/uploads/images/550_estee_lauder.jpg "
              alt="estee"
            />
          </div>

          <div className="partnerSlideContainer">
            <img
              src="https://oemfile.informamarkets-info.com/FileUpload/CA2022_32978/20221020140941496.jpg "
              alt="bg"
            />
          </div>

          <div className="partnerSlideContainer"  id="keraste">
            <img
              src="https://www.powerreviews.com/wp-content/uploads/2020/11/kerastase-logo-768x217.png"
              alt="keraste"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
