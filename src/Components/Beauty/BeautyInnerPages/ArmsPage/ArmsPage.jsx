import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import ArmsBest from "./ArmsBest";
import ArmsHead from "./ArmsHead";
import ArmsWaxing from "./ArmsWaxing";
import ArmsDetan from "./ArmsDetan";
import ArmsBenefits from "./ArmsBenefits";
import ArmsThreading from "./ArmsThreading";
import ArmsImg from "./ArmsImg";

const ArmsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Arms Waxing, De-tan & Threading in Bangalore – Book an Appointment!
        </title>
        <meta
          name="description"
          content="Arms Waxing, De-tan & Threading in Bangalore. At SCENT, we offer a comprehensive range of services designed to address these issues and help you achieve flawless skin. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/arms-waxing-detan-threading-salon-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <ArmsImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Arms"
      />
      <ArmsHead />
      <ArmsWaxing />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ArmsDetan />
      <ArmsThreading />
      <ArmsBenefits />
      <ArmsBest />
            
    </div>
  );
};

export default ArmsPage;
