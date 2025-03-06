import React from "react";
import "./About.css";
import AboutHeader from "./AboutHeader";
import AboutOwner from "./AboutOwner";
import AboutContent from "./AboutContent";
import AboutVision from "./AboutVision";
// import AboutEconomics from "./AboutEconomics";
// import AboutMarket from "./AboutMarket";
// import AboutSize from "./AboutSize";
// import AboutEnd from "./AboutEnd";
const AboutPage = () => {
  return (
    <div className="about-container">
      <AboutHeader />
      <AboutOwner/>
      <AboutContent/>
      <AboutVision/>
      {/* <AboutEconomics/>
      <AboutMarket/>
      <AboutSize/>
      <AboutEnd/> */}
    </div>
  );
};

export default AboutPage;
