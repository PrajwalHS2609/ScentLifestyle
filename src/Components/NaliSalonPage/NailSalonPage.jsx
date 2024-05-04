import React from "react";
import NavBg from "../MainServicePages/ServicePage/NavBg";
import NailSalonImg from "./NailSalonImg/NailSalonImg";
// import NailSalonService from './NailSalonCard/NailSalonService'
import LastComp from "../LastComp/LastComp";
import NailServiceCardContain from "./NailService Card/NailServiceCardContain";
import Members from "./../Members/Members";
import OurSalon from "../OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import HairRead from "./../HairServicePage/HairRead/HairRead";
import Navi7 from "./Navi7/Navi7";

const NailSalonPage = () => {
  return (
    <div>
      <NavBg />
      <NailSalonImg />
      <Navi7/>
      <NailServiceCardContain />
      <Members />
      <OurSalon />
      <HelpNearYou />
      <HairRead />
      <LastComp />
    </div>
  );
};

export default NailSalonPage;
