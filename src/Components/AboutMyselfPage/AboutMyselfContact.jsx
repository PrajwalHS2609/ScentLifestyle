import React from "react";
import "./AboutMyselfPage.css";
import { Link } from "react-router-dom";

const AboutMyselfContact = () => {
  return (
    <div className="aboutMyselfContactContainer">
      <h2><Link to={"/contact-us"}>why wait? contact us now!</Link></h2>
    </div>
  );
};

export default AboutMyselfContact;
