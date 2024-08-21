import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../../LastComp/LastComp";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import DiamondFacialHead from "./DiamondFacialHead";
import DiamondFacialBenefits from "./DiamondFacialBenefits";
import DiamondFacialProcess from "./DiamondFacialProcess";
import DiamondFacialWhy from "./DiamondFacialWhy";
import DiamondFacialCustomer from "./DiamondFacialCustomer";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import DiamondFacialImg from "./DiamondFacialImg";

const DiamondFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Diamond Glow Facial Services in Bangalore | Premium Facials Salon Near
          Me
        </title>
        <meta
          name="description"
          content="Diamond Glow Facial Services in Bangalore. Designed to rejuvenate and revitalize, this advanced facial treatment is perfect for anyone seeking to enhance their natural beauty with a radiant, youthful glow."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/diamond-glow-facial-services"
        />
      </Helmet>
      <NavBg />
      <DiamondFacialImg/>
      <DiamondFacialHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <DiamondFacialBenefits />
      <DiamondFacialProcess />
      <DiamondFacialWhy />
      <DiamondFacialCustomer />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default DiamondFacial;
