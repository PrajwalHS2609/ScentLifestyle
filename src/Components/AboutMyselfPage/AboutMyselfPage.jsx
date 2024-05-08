import React from "react";
import AboutMyselfTxt from "./AboutMyselfTxt";
import AboutMyselfImg from "./AboutMyselfImg";
import AboutMyselfContact from "./AboutMyselfContact";
import "./AboutMyselfPage.css"
import AboutMyselfNavBg from "./AboutMyselfNavBg";
import LastComp from "../LastComp/LastComp";
const AboutMyselfPage = () => {
  return (
    <div className="aboutMyselfPageContainer">
      <AboutMyselfNavBg/>
      <AboutMyselfImg />
      <AboutMyselfTxt />
      <AboutMyselfContact />
      <LastComp/> 

    </div>
  );
};

export default AboutMyselfPage;
