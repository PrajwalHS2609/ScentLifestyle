import React from "react";
import SpaImg from "./SpaImg/SpaImg";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "./../Help/HelpNearYou";
import LastComp from "./../LastComp/LastComp";
import Navi5 from "./Navi5/Navi5";
import SpaServiceCardContain from "./SpaServiceCard/SpaServiceCardContain";
import SpaRead from "./SpaRead/SpaRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";

const SpaPages = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Salon Spa in Bangalore - Hair, Nail, Skin, Beauty Essentials
        </title>
        <meta name="Indulge in premium SCENT spa services in Bangalore. Explore our luxurious body massages and rejuvenate your mind and body. Book now for ultimate relaxation!" content="Scent application" />
      </Helmet>
      <NavBg/>
      <SpaImg />
      <Navi5 />
      <SpaServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <SpaRead />
      <LastComp />
    </div>
  );
};

export default SpaPages;
