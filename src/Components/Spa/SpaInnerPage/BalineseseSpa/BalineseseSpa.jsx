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
import BalineseseSpaWhy from "./BalineseseSpaWhy";
import BalineseseSpaBenefits from "./BalineseseSpaBenefits";
import BalineseseSpaHead from "./BalineseseSpaHead";

const BalineseseSpa = () => {
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
      <InnerNavi link="/spa" service="Spa" currService="Balinesese Massage" />
      <BalineseseSpaHead />
      <BalineseseSpaBenefits />
      <BalineseseSpaWhy />
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

export default BalineseseSpa;
