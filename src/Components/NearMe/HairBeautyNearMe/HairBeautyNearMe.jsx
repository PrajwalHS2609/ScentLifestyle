import React from "react";
import { Helmet } from "react-helmet";
import HairServiceImg from "../../HairServicePage/HairServiceImg/HairServiceImg";
import Navi1 from "../../HairServicePage/Navi1/Navi1";
import HairServiceCardContain from "../../HairServicePage/HairServiceCard/HairServiceCardContain";
import HairSalon from "../../HairServicePage/HairSalon/HairSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairBeautyNearMeRead from "./HairBeautyNearMeRead";

const HairBeautyNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair & Beauty Salon near Me for Men & Women </title>
        <meta
          name="description"
          content="Hair & Beauty Salon near Me for Men & Women offers top-notch services, expert stylists, and a luxurious salon experience? Look no further than SCENT. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-and-beauty-salon-near-me"
        />{" "}
      </Helmet>
      <HairServiceImg />
      <Navi1 />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <HairBeautyNearMeRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairBeautyNearMe;
