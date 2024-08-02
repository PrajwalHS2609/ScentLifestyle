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
import BodyPolishSpaHead from "./BodyPolishSpaHead";
import BodyPolishSpaXp from "./BodyPolishSpaXp";
import BodyPolishSpaCustomer from "./BodyPolishSpaCustomer";
import BodyPolishSpaBook from "./BodyPolishSpaBook";
import NavBg from "../../../NavBg/NavBg";
import BodyPolishSpaBenefits from "./BodyPolishSpaBenefits";
import BodyPolishSpaWhy from './BodyPolishSpaWhy';

const BodyPolishSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-polish-in-bangalore"
        />
      </Helmet>
      <NavBg />
      {/* <FaceImg /> */}
      <InnerNavi link="/spa" service="Spa" currService="Body Polish" />
      <BodyPolishSpaHead />
      <BodyPolishSpaXp />
      <BodyPolishSpaBenefits />
      <BodyPolishSpaWhy />
      <BodyPolishSpaCustomer />
      <BodyPolishSpaBook />
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

export default BodyPolishSpa;
