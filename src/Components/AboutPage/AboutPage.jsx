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
import { Helmet } from "react-helmet";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
const AboutPage = () => {
  return (
    <div className="aboutPgContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About SCENT Salon Spa in Bangalore - Since 2008</title>
        <meta
          name="description"
          content="Scent is a sanctum where life comes to beauty and beauty to life. A makeover at scent will be the crown of your looks."
        />
        <link rel="canonical" href="https://scentlifestyle.com/about" />
      </Helmet>
      <NavBg />
      <AboutImg />
      <AboutPageHead />
      <AboutTxt />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default AboutPage;
