import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import BridalMakeupInJakkurHead from "./BridalMakeupInJakkurHead";
import BridalMakeupInJakkurWhy from "./BridalMakeupInJakkurWhy";
import BridalMakeupInJakkurProcess from "./BridalMakeupInJakkurProcess";
import BridalMakeupInJakkurCustomer from "./BridalMakeupInJakkurCustomer";
import BridalMakeupInJakkurHow from "./BridalMakeupInJakkurHow";
import BridalMakeupInJakkurBook from "./BridalMakeupInJakkurBook";
import BridalMakeupInJakkurImg from "./BridalMakeupInJakkurImg";
import BridalMakeupInJakkurTrend from "./BridalMakeupInJakkurTrend";

const BridalMakeupInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup in Jakkur, Bangalore. Whether you're envisioning a
          traditional bridal style or a modern twist, our expert makeup artists
          are here to bring your vision to life.{" "}
        </title>
        <meta
          name="description"
          content="Bridal Makeup in Jakkur, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-in-jakkur"
        />
      </Helmet>
      <NavBg />
      <BridalMakeupInJakkurImg />
      <InnerNavi
        link="/bridal-makeup"
        service="Bridal Makeup"
        currService="Bridal Makeup in Jakkur"
      />
      <BridalMakeupInJakkurHead />
      <BridalMakeupInJakkurWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalMakeupInJakkurProcess />
      <BridalMakeupInJakkurTrend />
      <BridalMakeupInJakkurCustomer />
      <BridalMakeupInJakkurHow />
      <BridalMakeupInJakkurBook />
            
    </div>
  );
};

export default BridalMakeupInJakkur;
