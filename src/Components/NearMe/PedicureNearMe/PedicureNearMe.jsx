import React from "react";
import NavBg from "../../NavBg/NavBg";
import NailSalonImg from "../../NaliSalonPage/NailSalonImg/NailSalonImg";
import Navi7 from "../../NaliSalonPage/Navi7/Navi7";
import NailServiceCardContain from "../../NaliSalonPage/NailService Card/NailServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import PediNearMe from "./PediNearMe";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";

const PedicureNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pedicure Near Me |Best Pedicure in Bangalore </title>
        <meta
          name=" description on pedicure near me"
          content="Pedicure in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
          Call Now"
        />
      </Helmet>
      <NavBg />
      <NailSalonImg />
      <Navi7 />
      <NailServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <PediNearMe />
      <LastComp />
    </div>
  );
};

export default PedicureNearMe;
