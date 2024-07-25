import React from "react";
import Navi1 from "./Navi1/Navi1";
import HairServiceCardContain from "./HairServiceCard/HairServiceCardContain";
import HairSalon from "./HairSalon/HairSalon";
import LastComp from "../LastComp/LastComp";
import HairServiceImg from "./HairServiceImg/HairServiceImg";
import HairRead from "./HairRead/HairRead";
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import HelpNearYou from "../Help/HelpNearYou";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
const HairServicePage = () => {
  return (
    <div className="hairMain">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Salon in Bangalore | Stylish Hair Cuts Salon near Me</title>
        <meta
          name="description"
          content="Experience top Hair salon services in Bangalore with SCENT. Expert hair care, stunning nails, rejuvenating spa treatments, luxurious facials, and essential beauty services."
        />
        <link rel="canonical" href="https://scentlifestyle.com/hair-salon" />
      </Helmet>
      <NavBg />
      <HairServiceImg />
      <Navi1 servName="Hair Service"/>
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <HairRead />
      <LastComp />
    </div>
  );
};

export default HairServicePage;
