import React from "react";
import NavBg from "./NavBg/NavBg";
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

const SpaPages = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Salon Spa in Bangalore - Hair, Nail, Skin, Beauty Essentials
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NavBg />
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
