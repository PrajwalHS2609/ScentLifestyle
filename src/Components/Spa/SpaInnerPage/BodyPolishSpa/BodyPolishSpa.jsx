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
import BodyPolishSpaHead from "./BodyPolishSpaHead";
import BodyPolishSpaXp from "./BodyPolishSpaXp";
import BodyPolishSpaCustomer from "./BodyPolishSpaCustomer";
import BodyPolishSpaBook from "./BodyPolishSpaBook";
import NavBg from "../../../NavBg/NavBg";
import BodyPolishSpaBenefits from "./BodyPolishSpaBenefits";
import BodyPolishSpaWhy from "./BodyPolishSpaWhy";
import BodyPolishSpaImg from "./BodyPolishSpaImg";

const BodyPolishSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Polish in Bangalore | Best Body Polish Salon Near Me</title>
        <meta
          name="description"
          content="Body Polish in Bangalore. As people seek ways to rejuvenate both body and mind, body polish treatments have gained popularity as a luxurious and effective solution."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-polish-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BodyPolishSpaImg />
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
            
    </div>
  );
};

export default BodyPolishSpa;
