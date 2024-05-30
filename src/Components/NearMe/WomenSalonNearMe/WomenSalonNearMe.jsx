import React from "react";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../Help/HelpNearYou";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import NailServiceCardContain from "../../NaliSalonPage/NailService Card/NailServiceCardContain";
import Navi7 from "../../NaliSalonPage/Navi7/Navi7";
import NailSalonImg from "../../NaliSalonPage/NailSalonImg/NailSalonImg";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import LastComp from "../../LastComp/LastComp";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WomenSalon from "./WomenSalon";
import ServicePage from "../../MainServicePages/ServicePage/ServicePage";
import Navi from "../../MainServicePages/Navi/Navi";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";

const WomenSalonNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Women Salon Near Me |Best Women Salon in Bangalore </title>
        <meta
          name="Women Salon in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
        Call Now"
          content="Scent application"
        />
      </Helmet>
      <NavBg />
      <ServicePage />
      <Navi />
      <ServiceCardContain />
      <UnisexSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WomenSalon />
      <LastComp />
    </div>
  );
};

export default WomenSalonNearMe;
