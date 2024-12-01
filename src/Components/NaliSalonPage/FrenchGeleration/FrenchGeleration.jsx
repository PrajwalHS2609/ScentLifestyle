import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import FrenchGelerationHead from "./FrenchGelerationHead";
import FrenchGelerationBenefits from './FrenchGelerationBenefits';
import FrenchGelerationProcess from "./FrenchGelerationProcess";
import FrenchGelerationTrend from './FrenchGelerationTrend';
import FrenchGelerationMaintain from "./FrenchGelerationMaintain";
import FrenchGelerationCustomer from "./FrenchGelerationCustomer";
import FrenchGelerationImg from "./FrenchGelerationImg";

const FrenchGeleration = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          French Nails Geleration in Bangalore | French Nail Geleration Salon
          near Me{" "}
        </title>
        <meta
          name="description"
          content="French Nails Geleration in Bangalore. A sophisticated and timeless nail service that ensures your nails look impeccable for any occasion."
        />
        <link
          rel="canonical"
          href="URL: https://scentlifestyle.com/french-nail-geleration  "
        />
      </Helmet>
      <NavBg />
      <FrenchGelerationImg/>
      <FrenchGelerationHead/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FrenchGelerationProcess/>
      <FrenchGelerationBenefits />
      <FrenchGelerationTrend/>
      <FrenchGelerationMaintain/>
      <FrenchGelerationCustomer/>
            
    </div>
  );
};

export default FrenchGeleration;
