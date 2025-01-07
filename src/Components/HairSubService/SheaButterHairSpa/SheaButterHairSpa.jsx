import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairSubServiceImg from "../HairSubServiceImg";
import SheaButterHairSpaHead from "./SheaButterHairSpaHead";
import SheaButterHairSpaWhyChoose from "./SheaButterHairSpaWhyChoose";
import SheaButterHairSpaBenefits from "./SheaButterHairSpaBenefits";
import SheaButterHairSpaWhat from "./SheaButterHairSpaWhat";
import SheaButterHairSpaWhy from "./SheaButterHairSpaWhy";
import SheaButterHairSpaWho from "./SheaButterHairSpaWho";
import SheaButterHairSpaTips from "./SheaButterHairSpaTips";
import SheaButterHairSpaBook from "./SheaButterHairSpaBook";
import { Helmet } from "react-helmet";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import sheaButterBanner from "./../../../Images/HairSubService/Shea Butter Hair Spa in Bangalore.png";

const SheaButterHairSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shea Butter Hair Spa in Bangalore by SCENT </title>
        <meta
          name="description"
          content="Shea Butter Hair Spa in Bangalore by SCENT. . Designed to nourish, repair, and revitalize your tresses, our specialized hair spa treatments are the perfect solution."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/shea-butter-hair-spa-in-bangalore"
        />
      </Helmet>
      <HairSubServiceImg img={sheaButterBanner} alt="Shea Butter Banner" />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Shea Butter Hair Spa"
      />
      <SheaButterHairSpaHead />
      <SheaButterHairSpaWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SheaButterHairSpaBenefits />
      <SheaButterHairSpaWhat />
      <SheaButterHairSpaWhy />
      <SheaButterHairSpaWho />
      <SheaButterHairSpaTips />
      <SheaButterHairSpaBook />
    </div>
  );
};

export default SheaButterHairSpa;
