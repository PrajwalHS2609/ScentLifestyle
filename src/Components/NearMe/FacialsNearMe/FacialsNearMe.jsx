import React from "react";
import NavBg from "../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import FacialsNearMeMain from "./FacialsNearMeMain";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import FacialImg from "../../FacialPage/FacialImg/FacialImg";
import Navi3 from "../../FacialPage/Navi3/Navi3";
import FacialServiceCardContain from "../../FacialPage/FacialCards/FacialServiceCardContain";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

const FacialsNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Facials Near Me |Best Facials in Bangalore </title>
        <meta
          name="description of facials near me"
          content="Facials in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
          Call Now"
        />
      </Helmet>
      <NavBg />
      <FacialImg />
      <Navi3 />
      <FacialServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialsNearMeMain />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default FacialsNearMe;
