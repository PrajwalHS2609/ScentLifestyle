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
import HairTreatmentNearMeMain from "./HairTreatmentNearMeMain";
import HairServiceCardContain from "../../HairServicePage/HairServiceCard/HairServiceCardContain";
import HairSalon from "../../HairServicePage/HairSalon/HairSalon";
import Navi1 from "../../HairServicePage/Navi1/Navi1";
import HairServiceImg from "../../HairServicePage/HairServiceImg/HairServiceImg";

const HairTreatmentNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Treatment Near Me |Best Hair Treatment in Bangalore </title>
        <meta
          name="description on hair treatment near me"
          content="Hair Treatment in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
          Call Now"
        />
      </Helmet>
      <NavBg />
      <HairServiceImg />
      <Navi1 />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairTreatmentNearMeMain />
            
    </div>
  );
};

export default HairTreatmentNearMe;
