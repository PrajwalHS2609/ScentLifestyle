import React from "react";
import "./AboutPage.css";
import loc1 from "./../../Images/sahakaranagar.jpg"
const AboutImg = () => {
  return (
    <div className="aboutPgImgContainer">
      <img
        src={loc1}
        alt=""
      />
    </div>
  );
};

export default AboutImg;
