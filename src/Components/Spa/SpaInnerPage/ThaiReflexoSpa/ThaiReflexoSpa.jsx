import React from "react";
import ThaiReflexoSpaHead from "./ThaiReflexoSpaHead";
import ThaiReflexoSpaBenefits from "./ThaiReflexoSpaBenefits";
import ThaiReflexoSpaWhy from "./ThaiReflexoSpaWhy";
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
const ThaiReflexoSpa = () => {
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
      <InnerNavi link="/spa" service="Spa" currService="Thai Reflexology" />
      <ThaiReflexoSpaHead />
      <ThaiReflexoSpaBenefits />
      <ThaiReflexoSpaWhy />
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

export default ThaiReflexoSpa;
