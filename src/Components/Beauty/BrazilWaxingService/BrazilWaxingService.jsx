import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BrazilWaxingServiceImg from "./BrazilWaxingServiceImg";
import BrazilWaxingServiceHead from "./BrazilWaxingServiceHead";
import BrazilWaxingServiceWhy from "./BrazilWaxingServiceWhy";
import BrazilWaxingServiceProcess from "./BrazilWaxingServiceProcess";
import BrazilWaxingServiceBenefits from "./BrazilWaxingServiceBenefits";
import BrazilWaxingServicePrepare from "./BrazilWaxingServicePrepare";
import BrazilWaxingServiceTips from "./BrazilWaxingServiceTips";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
const BrazilWaxingService = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Brazilian Waxing Services in Bangalore – Bikini Line Waxing Near Me
        </title>
        <meta
          name="description"
          content="Brazilian Waxing Services in Bangalore. Whether you’re preparing for a beach vacation or just want to feel your best every day. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/brazilian-waxing-services-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BrazilWaxingServiceImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Brazil Waxing in Bangalore"
      />
      <BrazilWaxingServiceHead />
      <BrazilWaxingServiceWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BrazilWaxingServiceProcess />
      <BrazilWaxingServiceBenefits />
      <BrazilWaxingServicePrepare />
      <BrazilWaxingServiceTips />
    </div>
  );
};

export default BrazilWaxingService;
