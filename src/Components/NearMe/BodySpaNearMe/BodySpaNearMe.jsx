import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import BodySpaNearMeMain from "./BodySpaNearMeMain";
import SpaImg from "../../Spa/SpaImg/SpaImg";
import Navi5 from "../../Spa/Navi5/Navi5";
import SpaServiceCardContain from "../../Spa/SpaServiceCard/SpaServiceCardContain";

const BodySpaNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Spa Near Me |Best Body Spa in Bangalore </title>
        <meta
          name="description on body spa near me"
          content="Body Spa in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
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
      <BodySpaNearMeMain />
      
    </div>
  );
};

export default BodySpaNearMe;
