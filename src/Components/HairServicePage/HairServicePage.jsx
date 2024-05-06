import React from "react";
import Navi1 from "./Navi1/Navi1";
import HairServiceCardContain from "./HairServiceCard/HairServiceCardContain";
import HairSalon from "./HairSalon/HairSalon";
import LastComp from "../LastComp/LastComp";
import HairServiceImg from "./HairServiceImg/HairServiceImg";
import NavBg2 from "./NavBg2/NavBg2";
import HairRead from "./HairRead/HairRead";
import ServiceWhy from './../MainServicePages/ServiceWhy/ServiceWhy';
import HelpNearYou from "../Help/HelpNearYou";
const HairServicePage = () => {
  return (
    <div className="hairMain">
      <NavBg2 />
      <HairServiceImg />
      <Navi1 />
      <HairServiceCardContain />
      <HairSalon />
      {/* <HairNearYou /> */}
      {/* <HairWhy /> */}
      <HelpNearYou/>
      <ServiceWhy/>
      <HairRead/>
      <LastComp />
    </div>
  );
};

export default HairServicePage;
