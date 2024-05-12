import React from "react";
import NavBg from "../MainServicePages/ServicePage/NavBg";
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

const NailSalonPage = () => {
  return (
    <div>
      <NavBg />
      <NailSalonImg />
      <Navi7/>
      <NailServiceCardContain />
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <HelpNearYou />
      <ServiceWhy/>
      <NailRead/>
      <LastComp />
    </div>
  );
};

export default NailSalonPage;
