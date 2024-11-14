import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import hairDetoxSpa from "./../../../Images/HairSalonInnerPage/HAIR SPA SERVICES.png";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairDetoxSpaHead from "./HairDetoxSpaHead";
import HairDetoxSpaBenefits from "./HairDetoxSpaBenefits";
import HairDetoxSpaWhat from "./HairDetoxSpaWhat";
import HairDetoxSpaGuide from "./HairDetoxSpaGuide";
import HairDetoxSpaWho from "./HairDetoxSpaWho";
import HairDetoxSpaMaintain from "./HairDetoxSpaMaintain";
import HairDetoxSpaBook from "./HairDetoxSpaBook";

const HairDetoxSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Detox Spa in Bangalore | Hair Detox Spa Near Me</title>
        <meta
          name="description"
          content="Hair Detox Spa in Bangalore. We understand the importance of a comprehensive detox for restoring your hair’s natural vitality and health."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-detox-spa-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairDetoxSpa} alt={hairDetoxSpa} />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Detox Spa"
      />
      <HairDetoxSpaHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairDetoxSpaBenefits />
      <HairDetoxSpaWhat />
      <HairDetoxSpaGuide />
      <HairDetoxSpaWho />
      <HairDetoxSpaMaintain />
      <HairDetoxSpaBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairDetoxSpa;
