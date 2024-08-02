import React from "react";

import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "../../../Beauty/BeautyRead/BeautyRead";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import BackSpaHead from "./BackSpaHead";
import BackBenefits from "./../../../Beauty/BeautyInnerPages/BackPage/BackBenefits";
import NavBg from "../../../NavBg/NavBg";
import BackSpaXp from "./BackSpaXp";
import BackSpaOffering from "./BackSpaOffering";
import BackSpaWellness from "./BackSpaWellness";
import BackSpaCustomer from './BackSpaCustomer';
import BackSpaBook from "./BackSpaBook";
import BackSpaImg from './BackSpaImg';

const BackSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Back Massage in Bangalore | Back Pain & Muscles Massage Salon Near Me
        </title>
        <meta
          name="description"
          content="Back Massage in Bangalore. One of the most effective ways to achieve relaxation and rejuvenation is through the ancient practice of Thai Reflexology Massage."
        />
        <link
          rel="canonical"
          href=" https://scentlifestyle.com/back-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BackSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Back Massage" />
      <BackSpaHead />
      <BackSpaXp/>
      <BackBenefits />
      <BackSpaOffering/>
      <BackSpaWellness/>
      <BackSpaCustomer/>
      <BackSpaBook/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BackSpa;
