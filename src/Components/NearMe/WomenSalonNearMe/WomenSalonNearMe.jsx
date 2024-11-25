import React from "react";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../Help/HelpNearYou";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import LastComp from "../../LastComp/LastComp";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import ServicePage from "../../MainServicePages/ServicePage/ServicePage";
import Navi from "../../MainServicePages/Navi/Navi";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import CompWomenSalon from "./CompWomenSalon";
import WomenSalonHead from "./WomenSalonHead";

const WomenSalonNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Women Salon Near Me |Best Women Salon in Bangalore </title>
        <meta
          name="description on women salon near me"
          content="Women Salon in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
          Call Now"
        />
      </Helmet>
      <NavBg />
      <ServicePage />
      <Navi />
      <WomenSalonHead />
      <ServiceCardContain />
      <UnisexSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <CompWomenSalon />
      <LastComp />
    </div>
  );
};

export default WomenSalonNearMe;
