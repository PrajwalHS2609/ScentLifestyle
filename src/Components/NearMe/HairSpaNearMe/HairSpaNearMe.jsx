import React from "react";
import NavBg from "../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import LastComp from "../../LastComp/LastComp";
import Navi1 from "../../HairServicePage/Navi1/Navi1";
import HairServiceImg from "../../HairServicePage/HairServiceImg/HairServiceImg";
import HairServiceCardContain from "../../HairServicePage/HairServiceCard/HairServiceCardContain";
import HairSalon from "../../HairServicePage/HairSalon/HairSalon";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import HairSpaNearMeHead from './HairSpaNearMeHead';
import HairSpaNearMePara from './HairSpaNearMePara';

const HairSpaNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Spa Near Me |Best Hair Spa in Bangalore </title>
        <meta
          name="description on hair span near me "
          content="Hair Spa in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
          Call Now"
        />
      </Helmet>
      <NavBg />
      <HairServiceImg />
      <Navi1 />
      <HairSpaNearMeHead />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSpaNearMePara />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default HairSpaNearMe;
