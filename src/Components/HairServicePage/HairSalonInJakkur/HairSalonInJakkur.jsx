import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import HairSalonInJakkurImg from "./HairSalonInJakkurImg/HairSalonInJakkurImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInJakkurWhy from "./HairSalonInJakkurWhy/HairSalonInJakkurWhy";
import HairSalonInJakkurHead from "./HairSalonInJakkurHead/HairSalonInJakkurHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairSalonInJakkurService from "./HairSalonInJakkurService/HairSalonInJakkurService";
import HairSalonInJakkurCustomer from "./HairSalonInJakkurCustomer/HairSalonInJakkurCustomer";
import HairSalonInJakkurBook from "./HairSalonInJakkurBook";
import HairSalonInJakkurTips from "./HairSalonInJakkurTips/HairSalonInJakkurTips";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const HairSalonInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Salon in Jakkur, Bangalore | Hair Spa near Jakkur </title>
        <meta
          name="description"
          content="Hair Salon in Jakkur, Bangalore. SCENT known for its exceptional services and warm ambiance, our salon is dedicated to making every visit a memorable experience."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-salon-in-jakkur"
        />
      </Helmet>
      <NavBg />
      <HairSalonInJakkurImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair salon in Jakkur"
      />
      <HairSalonInJakkurHead />
      <HairSalonInJakkurWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSalonInJakkurService />
      <HairSalonInJakkurCustomer />
      <HairSalonInJakkurTips />
      <HairSalonInJakkurBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairSalonInJakkur;
