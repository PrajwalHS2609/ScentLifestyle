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
import ThaiReflexoSpaWellness from "./ThaiReflexoSpaWellness";
import ThaiReflexoSpaCustomer from "./ThaiReflexoSpaCustomer";
import ThaiReflexoSpaBook from './ThaiReflexoSpaBook';
import NavBg from "../../../NavBg/NavBg";
import ThaiReflexoSpaImg from './ThaiReflexoSpaImg';
const ThaiReflexoSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Thai Reflexology Massage in Bangalore | Best Thai Massage Salon Near
          Me
        </title>
        <meta
          name="description"
          content="Thai Reflexology Massage in Bangalore. One of the most effective ways to achieve relaxation and rejuvenation is through the ancient practice of Thai Reflexology Massage."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/thai-reflexology-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <ThaiReflexoSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Thai Reflexology" />
      <ThaiReflexoSpaHead />
      <ThaiReflexoSpaBenefits />
      <ThaiReflexoSpaWhy />
      <ThaiReflexoSpaWellness/>
      <ThaiReflexoSpaCustomer/>
      <ThaiReflexoSpaBook/>
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

export default ThaiReflexoSpa;
