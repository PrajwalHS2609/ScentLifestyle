import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import SnowWhiteFacialHead from "./SnowWhiteFacialHead";
import SnowWhiteFacialWhy from "./SnowWhiteFacialWhy";
import SnowWhiteFacialBenefits from "./SnowWhiteFacialBenefits";
import SnowWhiteFacialIng from "./SnowWhiteFacialIng";
import SnowWhiteFacialProcess from "./SnowWhiteFacialProcess";
import SnowWhiteFacialExp from "./SnowWhiteFacialExp";
import SnowWhiteFacialCustomer from "./SnowWhiteFacialCustomer";
import SnowWhiteFacialBook from "./SnowWhiteFacialBook";

const SnowWhiteFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Snow White Facial Services in Bangalore | Good Facials Salon Near Me
        </title>
        <meta
          name="description"
          content=": Snow White Facial Services in Bangalore. This exceptional facial treatment is designed to lighten and revitalize your skin, giving you a radiant and youthful glow. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/snow-white-facial-services"
        />
      </Helmet>
      <NavBg />
      <SnowWhiteFacialHead />
      <SnowWhiteFacialWhy />
      <SnowWhiteFacialBenefits />
      <SnowWhiteFacialIng />
      <SnowWhiteFacialProcess />
      <SnowWhiteFacialExp />
      <SnowWhiteFacialCustomer />
      <SnowWhiteFacialBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default SnowWhiteFacial;