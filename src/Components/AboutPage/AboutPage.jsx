import React from "react";
import AboutImg from "./AboutImg";
import AboutTxt from "./AboutTxt";
import "./AboutPage.css";
import LastComp from "../LastComp/LastComp";
import AboutPageHead from "./AboutPageHead";
import NavBg from "../NavBg/NavBg";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import HelpNearYou from "../Help/HelpNearYou";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import Partners from "../HomePage/Partners/Partners";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Members from "../HomePage/Members/Members";
const AboutPage = () => {
  return (
    <div className="aboutPgContainer">
      <NavBg />
      <AboutImg />
      <AboutPageHead />
      <AboutTxt />
      <Members />
      <OurSalon />
      <Partners/>
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews/>
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default AboutPage;
