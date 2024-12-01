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
import LegsHead from "./LegsHead";
import LegsWaxing from "./LegsWaxing";
import LegsDetan from "./LegsDetan";
import LegsThreading from "./LegsThreading";
import LegsBest from "./LegsBest";
import LegsCustomer from "./LegsCustomer";
import LegsImg from "./LegsImg";

const LegsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Legs Waxing, De-tan & Threading in Bangalore – Book an
        Appointment!</title>
        <meta
          name="description"
          content="Legs Waxing, De-tan & Threading in Bangalore. At SCENT, we offer a comprehensive range of services designed to address these issues and help you achieve flawless skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/legs-waxing-detan-threading-salon-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <LegsImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Legs"
      />
      
      <LegsHead />
      <LegsWaxing />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LegsDetan />
      <LegsThreading />
      <LegsBest />
      <LegsCustomer />
            
    </div>
  );
};

export default LegsPage;
