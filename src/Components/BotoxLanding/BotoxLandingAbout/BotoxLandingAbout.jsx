import React from "react";
import "./BotoxLandingAbout.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Sahakar from "./../../../Images/sahakaranagar.jpg";
import Lavelle from "./../../../Images/lavelle road.jpg";
import Jakkur from "./../../../Images/jakkur.jpg";
import varthur from "./../../../Images/Varthur - whitefield.jpg";
import Seege from "./../../../Images/seegehalli - whitefield.jpg";
import jp from "./../../../Images/JP Nagar.jpg";
const BotoxLandingAbout = () => {
  return (
    <div className="BotoxLandingAbout">
      <div className="BotoxLandingAboutContent" id="BotoxLandingAboutContent1">
        <Carousel
          className="BotoxLandingAboutCarousel"
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
      <div className="BotoxLandingAboutContent" id="BotoxLandingAboutContent2">
        <h2>About Us</h2>
        <p>
          Experience luxury and sophistication with SCENT's opulent menu,
          designed to enhance your natural radiance. Pamper yourself with
          top-notch hair, spa & wellness, personal grooming, and bridal services
          at our exclusive unisex salon in Bangalore.
        </p>
        <a href="https://api.whatsapp.com/send?phone=919606682700">
          <button>BOOK AN APPOINTMENT</button>
        </a>
      </div>
    </div>
  );
};

export default BotoxLandingAbout;
