import React from "react";
import HelpCard from "./HelpCard";
// import "./HelpNearYou.css";
import "./HelpNearYou1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sahakar from "./../../Images/sahakaranagar.jpg";
import Lavelle from "./../../Images/lavelle road.jpg";
import Jakkur from "./../../Images/jakkur.jpg";
import varthur from "./../../Images/Varthur - whitefield.jpg";
import Seege from "./../../Images/seegehalli - whitefield.jpg";

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
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
          image={Sahakar}
          no="9740322700"
          link="/salon-in-sahakar-nagar"
        />

        <HelpCard
          city="Lavelle Road"
          image={Lavelle}
          no="9740222700"
          link="/salon-in-lavelle-road"
        />
        <HelpCard
          city="Jakkur"
          image={Jakkur}
          no=" 9742212700"
          link="/salon-in-jakkur"
        />
        <HelpCard
          city="Uptown Square"
          image={varthur}
          no="9148122700"
          link="/salon-in-uptown-whitefield"
        />
        <HelpCard
          city="Meadows"
          image={Seege}
          no="9686221700"
          link="/salon-in-whitefield"
        />
      </div>

      <div className="respHelpNearYouCardContainer">
        <Slider className="respHelpCardSlider" {...settings}>
          <HelpCard
            city="Sahakar Nagar"
            image={Sahakar}
            no=" 9740322700"
            link="/salon-in-sahakar-nagar"
          />

          <HelpCard
            city="Lavelle Road"
            image={Lavelle}
            no="9740222700"
            link="/salon-in-lavellel-road"
          />
          <HelpCard
            city="Jakkuru"
            image={Jakkur}
            no="9742212700"
            link="/salon-in-jakkur"
          />
          <HelpCard
            city="Varthur"
            image={varthur}
            no="9148122700"
            link="/salon-in-uptown-whitefield"
          />
          <HelpCard
            city="Seegelli"
            image={Seege}
            no="9686221700"
            link="/salon-in-whitefield"
          />
        </Slider>
      </div>
    </>
  );
};

export default HelpNearYouCards;
