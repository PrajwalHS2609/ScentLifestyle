import React from "react";
import { Helmet } from "react-helmet";
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
import LastComp from "../../LastComp/LastComp";
import NailNearMe from "./NailNearMe";

const NailSalonNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nail Salon Near Me |Best Nail Salon in Bangalore </title>
        <meta
          name="despriction on nails salon near me"
          content="Nail Salon in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
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
      <NailNearMe />
      <LastComp />
    </div>
  );
};

export default NailSalonNearMe;
