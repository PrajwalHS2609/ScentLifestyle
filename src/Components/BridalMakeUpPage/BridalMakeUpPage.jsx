import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import BridalMakeUpImg from "./BridalMakeUpImg";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../LastComp/LastComp";
import Partners from "../HomePage/Partners/Partners";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Members from "../HomePage/Members/Members";
import Navi1 from "../HairServicePage/Navi1/Navi1";
import BridalMakeUpServiceCard from "./BridalMakeUpServiceCard";
import BridalMakeUpAbout from "./BridalMakeUpAbout/BridalMakeUpAbout";
import BridalReadMore from "./BridalReadMore/BridalReadMore";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";

const BridalMakeUpPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Bridal Makeup Artists in Bangalore - Wedding Makeup Artists
        </title>
        <meta
          name="description"
          content="Bridal Makeup Artists in Bangalore. Look your absolute best even before your D-Day with our exclusive pre-bridal services."
        />
        <link rel="canonical" href="https://scentlifestyle.com/bridal-makeup" />
      </Helmet>
      <NavBg />
      <BridalMakeUpImg />
      <Navi1 servName="Bridal MakeUp" />
      <BridalMakeUpServiceCard />
      <BridalMakeUpAbout />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <BridalReadMore />
      <LastComp />
    </div>
  );
};

export default BridalMakeUpPage;