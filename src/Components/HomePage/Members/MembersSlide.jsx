import React from "react";
import "./Members.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MembersSlide = () => {
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
        },
      },
      // {
      //   breakpoint: 990,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
    ],
  };
  return (
    <div className="memberSlideContainer">
      <div className="memberSlideContent">
        <Slider {...settings}>
          <div className="memberSlide">
            <img
              src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/3.png"
              alt=""
            />
            <h1>Martin Doe</h1>
            <pre>TATTOO</pre>
          </div>
          <div className="memberSlide">
            <img
              src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/6.png"
              alt=""
            />
            <h1>Jennifer Scott</h1>
            <pre>MAKEUP</pre>
          </div>
          <div className="memberSlide">
            <img
              src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/1.png"
              alt=""
            />
            <h1>Jonathan Doe</h1>
            <pre>BARBER</pre>
          </div>
          <div className="memberSlide">
            <img
              src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/4.png "
              alt=""
            />
            <h1>Martin Doe</h1>
            <pre>TATTOO</pre>
          </div>
          <div className="memberSlide">
            <img
              src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/2.png"
              alt=""
            />
            <h1>Jennifer Scott</h1>
            <pre>TATTOO</pre>
          </div>
          <div className="memberSlide">
            <img
              src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/5.png"
              alt=""
            />
            <h1>Jonathan Doe</h1>
            <pre>TATTOO</pre>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MembersSlide;
