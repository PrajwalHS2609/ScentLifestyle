import React from "react";
import ServicePage from "./ServicePage/ServicePage";
import Navi from "./Navi/Navi";
import ServiceCardContain from "./ServiceCards/ServiceCardContain";
import UnisexSalon from "./UnisexSalon/UnisexSalon";
import LastComp from "../LastComp/LastComp";
import ServiceWhy from "./ServiceWhy/ServiceWhy";
import ServiceRead from "./ServiceRead/ServiceRead";
import HelpNearYou from "../Help/HelpNearYou";
import Members from './../HomePage/Members/Members';
import OurSalon from './../HomePage/OurSalon/OurSalon';
import Partners from './../HomePage/Partners/Partners';
import InstaFeed from './../HomePage/InstaFeed/InstaFeed';
import { Helmet } from "react-helmet";

const MainServicePage = () => {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title>
        Scent Salon Services in Bangalore | Hair & Spa Services Near Me        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ServicePage />
      <Navi />
      <ServiceCardContain />
      <UnisexSalon />
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <HelpNearYou />
      <ServiceWhy />
      <ServiceRead />
      <LastComp />
    </div>
  );
};

export default MainServicePage;
