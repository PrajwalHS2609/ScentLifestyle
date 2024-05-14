import React from "react";
import "./AboutMyselfPage.css";
import { Link } from "react-router-dom";

const AboutMyselfContact = () => {
  return (
    <div className="aboutMyselfContactContainer">
      <h1><Link to={"/contact-us"}>why wait? contact us now!</Link></h1>
    </div>
  );
};

export default AboutMyselfContact;
