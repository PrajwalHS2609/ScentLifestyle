import React from "react";
import "./About.css";
import aboutBanner from "./../../Images/aboutBanner.png";
const AboutHeader = () => {
  return (
    <div className="aboutHeader-container">
      <img src={aboutBanner} alt="aboutBanner" />
      <div className="aboutHeader-content">
        <h2>ABOUT US </h2>
      </div>
    </div>
  );
};

export default AboutHeader;
