import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import SpaImg from "../../Spa/SpaImg/SpaImg";
import Navi5 from "../../Spa/Navi5/Navi5";
import SpaServiceCardContain from "../../Spa/SpaServiceCard/SpaServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import HeadMassageMain from "./HeadMassageMain";

const HeadMassageNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Head Massage Near Me |Best Head Massage in Bangalore </title>
        <meta
          name="description on head massage "
          content="Head Massage in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
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
      <HeadMassageMain />
      <LastComp />
    </div>
  );
};

export default HeadMassageNearMe;
