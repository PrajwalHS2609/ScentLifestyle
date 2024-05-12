import React from "react";
import Navi1 from "./Navi1/Navi1";
import HairServiceCardContain from "./HairServiceCard/HairServiceCardContain";
import HairSalon from "./HairSalon/HairSalon";
import LastComp from "../LastComp/LastComp";
import HairServiceImg from "./HairServiceImg/HairServiceImg";
import NavBg2 from "./NavBg2/NavBg2";
import HairRead from "./HairRead/HairRead";
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import HelpNearYou from "../Help/HelpNearYou";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
const HairServicePage = () => {
  return (
    <div className="hairMain">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Hair Salon in Bangalore for Cuts, Highlights, Treatments & Spa        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NavBg2 />
      <HairServiceImg />
      <Navi1 />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <ServiceWhy />
      <HairRead />
      <LastComp />
    </div>
  );
};

export default HairServicePage;
