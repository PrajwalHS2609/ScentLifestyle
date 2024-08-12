import React from "react";
import "./AboutPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Sahakar from "./../../Images/sahakaranagar.jpg";
import Lavelle from "./../../Images/lavelle road.jpg";
import Jakkur from "./../../Images/jakkur.jpg";
import varthur from "./../../Images/Varthur - whitefield.jpg";
import Seege from "./../../Images/seegehalli - whitefield.jpg";
import jp from "./../../Images/JP Nagar.jpg";const AboutImg = () => {
  return (
    <div className="aboutPgImgContainer">
       <Carousel
          className="AboutCarousel"
          autoPlay
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          transitionTime={1000} // Duration of transition
          stopOnHover={false}
        >
          <div>
            <img src={Sahakar} alt="" />
          </div>
          <div>
            <img src={Lavelle} alt="" />
          </div>
          <div>
            <img src={Jakkur} alt="" />
          </div>
          <div>
            <img src={varthur} alt="" />
          </div>
          <div>
            <img src={Seege} alt="" />
          </div>
          <div>
            <img src={jp} alt="" />
          </div>
        </Carousel>
    </div>
  );
};

export default AboutImg;
