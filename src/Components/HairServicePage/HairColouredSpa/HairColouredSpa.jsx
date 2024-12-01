import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import hairColouredSpa from "./../../../Images/HairSalonInnerPage/HAIR SPA SERVICES.png";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairColouredSpaHead from "./HairColouredSpaHead";
import HairColouredSpaBenefits from "./HairColouredSpaBenefits";
import HairColouredSpaWhat from "./HairColouredSpaWhat";
import HairColouredSpaMaintain from "./HairColouredSpaMaintain";
import HairColouredSpaWhy from "./HairColouredSpaWhy";
import HairColouredSpaTips from "./HairColouredSpaTips";
import HairColouredSpaBook from "./HairColouredSpaBook";

const HairColouredSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Spa for Colored Hair in Bangalore | Best Hair Spa Near Me
        </title>
        <meta
          name="description"
          content="Hair Spa for Colored Hair in Bangalore, tailored to meet the unique needs of color-treated tresses and keep them looking as fresh and radiant as the day you left the salon"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-spa-for-colored-hair-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairColouredSpa} alt={hairColouredSpa} />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Hydration Boost Spa "
      />
      <HairColouredSpaHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairColouredSpaBenefits />
      <HairColouredSpaWhat />
      <HairColouredSpaMaintain />
      <HairColouredSpaWhy />
      <HairColouredSpaTips />
      <HairColouredSpaBook />
            
    </div>
  );
};

export default HairColouredSpa;
