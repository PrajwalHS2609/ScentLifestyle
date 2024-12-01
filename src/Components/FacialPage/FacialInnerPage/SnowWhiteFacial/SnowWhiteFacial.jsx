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
import SnowWhiteFacialHead from "./SnowWhiteFacialHead";
import SnowWhiteFacialWhy from "./SnowWhiteFacialWhy";
import SnowWhiteFacialBenefits from "./SnowWhiteFacialBenefits";
import SnowWhiteFacialIng from "./SnowWhiteFacialIng";
import SnowWhiteFacialProcess from "./SnowWhiteFacialProcess";
import SnowWhiteFacialExp from "./SnowWhiteFacialExp";
import SnowWhiteFacialCustomer from "./SnowWhiteFacialCustomer";
import SnowWhiteFacialBook from "./SnowWhiteFacialBook";
import SnowWhiteFacialImg from "./SnowWhiteFacialImg";

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
      <SnowWhiteFacialImg />
      <SnowWhiteFacialHead />
      <SnowWhiteFacialWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SnowWhiteFacialBenefits />
      <SnowWhiteFacialIng />
      <SnowWhiteFacialProcess />
      <SnowWhiteFacialExp />
      <SnowWhiteFacialCustomer />
      <SnowWhiteFacialBook />
            
    </div>
  );
};

export default SnowWhiteFacial;
