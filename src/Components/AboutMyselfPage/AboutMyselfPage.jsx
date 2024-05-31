import React from "react";
import AboutMyselfTxt from "./AboutMyselfTxt";
import AboutMyselfImg from "./AboutMyselfImg";
import AboutMyselfContact from "./AboutMyselfContact";
import "./AboutMyselfPage.css";
import AboutMyselfNavBg from "./AboutMyselfNavBg";
import LastComp from "../LastComp/LastComp";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";

const AboutMyselfPage = () => {
  return (
    <>
      <div className="aboutMyselfPageContainer">
        <AboutMyselfNavBg />
        <AboutMyselfImg />
        <AboutMyselfTxt />
        <AboutMyselfContact />
      </div>
      <div>
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <HelpNearYou />
        <TextLocReviews />
        <ServiceWhy />
        <LastComp />
      </div>
    </>
  );
};

export default AboutMyselfPage;
