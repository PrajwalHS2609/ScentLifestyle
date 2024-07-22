import React from "react";
import AboutMyselfTxt from "./AboutMyselfTxt";
import AboutMyselfImg from "./AboutMyselfImg";
import AboutMyselfContact from "./AboutMyselfContact";
import "./AboutMyselfPage.css";
import LastComp from "../LastComp/LastComp";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import NavBg from "../NavBg/NavBg";

const AboutMyselfPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Myself - going organic the scent way</title>
        <meta
          name="description"
          content="All About Myself is elegance compressed into a beauty bar. Use it for yourself or gift to a friend: spread the Scent lifestyle! Go organic the Scent way."
        />
        <link rel="canonical" href="https://scentlifestyle.com/myself" />
      </Helmet>
      <div className="aboutMyselfPageContainer">
        <NavBg />
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
        <WhatsApp />
        <LastComp />
      </div>
    </>
  );
};

export default AboutMyselfPage;
