import React from "react";
import AboutImg from "./AboutImg";
import AboutTxt from "./AboutTxt";
import "./AboutPage.css";
import LastComp from "../LastComp/LastComp";
import AboutPageHead from "./AboutPageHead";
import NavBg from "../NavBg/NavBg";
const AboutPage = () => {
  return (
    <div className="aboutPgContainer">
      <NavBg />
      <AboutImg />
      <AboutPageHead />
      <AboutTxt />
      <LastComp />
    </div>
  );
};

export default AboutPage;
