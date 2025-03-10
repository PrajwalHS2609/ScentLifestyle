import React from "react";
import FacialImg from "./FacialImg/FacialImg";
import FacialServiceCardContain from "./FacialCards/FacialServiceCardContain.jsx";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou.jsx";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy.jsx";
import FacialRead from "./FacialRead/FacialRead.jsx";
import Partners from "../HomePage/Partners/Partners.jsx";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed.jsx";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg.jsx";
import TextLocReviews from "../TextLocReviews/TextLocReviews.jsx";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb.jsx";
const FacialPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Facial Services in Bangalore | Facial Salon Near Me
        </title>
        <meta
          name="description"
          content="SCENT Salon in Bangalore for Revitalize your face with SCENT's mood-enhancing, skin-soothing treatment for a youthful, glowing complexion. Indulge and achieve your desired look."
        />
         <link
          rel="canonical"
          href="https://scentlifestyle.com/facial"
        />
      </Helmet>
      <NavBg />
      <FacialImg />
      <ServBreadCrumb currService="Facial" />
      <FacialServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews/>
      <ServiceWhy />
      <FacialRead />
      
    </div>
  );
};

export default FacialPage;
