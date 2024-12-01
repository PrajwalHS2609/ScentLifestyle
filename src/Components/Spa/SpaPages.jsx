import React from "react";
import SpaImg from "./SpaImg/SpaImg";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "./../Help/HelpNearYou";
import SpaServiceCardContain from "./SpaServiceCard/SpaServiceCardContain";
import SpaRead from "./SpaRead/SpaRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import TextLocReviews from "./../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb";

const SpaPages = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spa Services in Bangalore | Best Women Spas Near Me</title>
        <meta
          name="description"
          content="Experience bliss at Bangalore SCENT Spa with calming massages, revitalizing body scrubs, and exclusive Relax & Unwind packages tailored to your needs. Pamper yourself today."
        />
        <link rel="canonical" href="https://scentlifestyle.com/spa" />
      </Helmet>
      <NavBg />
      <SpaImg />
      <ServBreadCrumb currService="Spa"/>
      <SpaServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SpaRead />
      
    </div>
  );
};

export default SpaPages;
