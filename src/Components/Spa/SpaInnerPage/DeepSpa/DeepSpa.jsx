import React from "react";
import DeepSpaHead from "./DeepSpaHead";
import DeepSpaBenefits from "./DeepSpaBenefits";
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
import NavBg from "../../../NavBg/NavBg";
import DeepSpaXp from "./DeepSpaXp";
import DeepSpaOffering from "./DeepSpaOffering";
import DeepSpaWellness from "./DeepSpaWellness";
import DeepSpaCustomer from "./DeepSpaCustomer";
import DeepSpaBook from "./DeepSpaBook";
import DeepSpaImg from './DeepSpaImg';
const DeepSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          Deep Tissue Massage in Bangalore | Best Deep Tissue Massage Near Me
        </title>
        <meta
          name="description"
          content="Deep Tissue Massage in Bangalore. Stands out for its ability to relieve chronic pain, muscle tension, and stress. Book Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/deep-tissue-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <DeepSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Deep Tissue Massage" />
      <DeepSpaHead />
      <DeepSpaXp />
      <DeepSpaBenefits />
      <DeepSpaOffering />
      <DeepSpaWellness />
      <DeepSpaCustomer />
      <DeepSpaBook />
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

export default DeepSpa;
