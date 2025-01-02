import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairStraighteningHead from "./HairStraighteningHead";
import HairStraighteningService from "./HairStraighteningService";
import HairStraighteningBenefits from "./HairStraighteningBenefits";
import HairStraighteningProcess from "./HairStraighteningProcess";
import HairStraighteningWhat from "./HairStraighteningWhat";
import HairStraighteningTips from "./HairStraighteningTips";
import HairStraighteningWhy from "./HairStraighteningWhy";
import hairStraightening from "./../../../Images/HairSalonInnerPage/HAIR SPA SERVICES.png";
import HairSalonInMeadowsImg from "../../LocationServices/HairLocationServices/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";

const HairStraightening = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Straightening Salon in Bangalore | Hair Straightening Treatment
          Near Me
        </title>
        <meta
          name="description"
          content="Hair Straightening Salon in Bangalore | Hair Straightening Treatment Near Me"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-straightening-salon-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairStraightening} alt={hairStraightening} />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Straightening"
      />
      <HairStraighteningHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairStraighteningService />
      <HairStraighteningBenefits />
      <HairStraighteningProcess />
      <HairStraighteningWhat />
      <HairStraighteningTips />
      <HairStraighteningWhy />
            
    </div>
  );
};

export default HairStraightening;
