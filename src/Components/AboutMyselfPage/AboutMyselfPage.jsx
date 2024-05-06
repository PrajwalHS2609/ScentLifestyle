import React from "react";
import AboutMyselfTxt from "./AboutMyselfTxt";
import AboutMyselfImg from "./AboutMyselfImg";
import AboutMyselfContact from "./AboutMyselfContact";
import "./AboutMyselfPage.css"
import AboutMyselfNavBg from "./AboutMyselfNavBg";
const AboutMyselfPage = () => {
  return (
    <div className="aboutMyselfPageContainer">
      <AboutMyselfNavBg/>
      <AboutMyselfImg />
      <AboutMyselfTxt />
      <AboutMyselfContact />
    </div>
  );
};

export default AboutMyselfPage;
