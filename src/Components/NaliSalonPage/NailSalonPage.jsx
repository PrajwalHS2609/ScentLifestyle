import React from "react";
import NailSalonImg from "./NailSalonImg/NailSalonImg";
// import NailSalonService from './NailSalonCard/NailSalonService'
import LastComp from "../LastComp/LastComp";
import NailServiceCardContain from "./NailService Card/NailServiceCardContain";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import Navi7 from "./Navi7/Navi7";
import ServiceWhy from './../MainServicePages/ServiceWhy/ServiceWhy';
import NailRead from "./NailSalonRead/NailRead";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import Partners from "../HomePage/Partners/Partners";
import { Helmet } from "react-helmet";
import NavBg from "./../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";

const NailSalonPage = () => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>
        SCENT Nail Services in Bangalore -  Nail arts Salon Near Me</title>
        <meta name="Discover the best nail salon for women in Bangalore! Treat yourself to luxurious nail extensions, nail art, and polish services. Book your appointment today for flawless nails!" content="Scent application" />
      </Helmet>
<NavBg/>
      <NailSalonImg />
      <Navi7/>
      <NailServiceCardContain />
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <HelpNearYou />
      <TextLocReviews/>
      <ServiceWhy/>
      <NailRead/>
      <LastComp />
    </div>
  );
};

export default NailSalonPage;
