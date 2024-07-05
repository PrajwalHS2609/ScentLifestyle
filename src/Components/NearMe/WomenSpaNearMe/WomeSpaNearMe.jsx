import React from "react";
import NavBg from "../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WomenSpa from "./WomenSpa";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import SpaImg from "../../Spa/SpaImg/SpaImg";
import Navi5 from "../../Spa/Navi5/Navi5";
import SpaServiceCardContain from "../../Spa/SpaServiceCard/SpaServiceCardContain";

const WomeSpaNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Women Spa Near Me |Best Women Sap in Bangalore </title>
        <meta
          name="description on women spa near me"
          content="Women Spa in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
          Call Now"
        />
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
      <TextLocReviews />
      <ServiceWhy />
      <WomenSpa />
      <LastComp />
    </div>
  );
};

export default WomeSpaNearMe;
