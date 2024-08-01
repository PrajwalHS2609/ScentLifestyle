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
import BackSpaWhy from "./BackSpaWhy";
import BackBenefits from "./../../../Beauty/BeautyInnerPages/BackPage/BackBenefits";

const BackSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <NavBg />
      {/* <FaceImg /> */}
      <InnerNavi link="/spa" service="Spa" currService="Back Massage" />
      <BackSpaHead />
      <BackBenefits />
      <BackSpaWhy />
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
