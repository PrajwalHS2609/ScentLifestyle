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
import ChocolateFacialHead from "./ChocolateFacialHead";
import ChocolateFacialUnderstand from "./ChocolateFacialUnderstand";
import ChocolateFacialDiff from "./ChocolateFacialDiff";
import ChocolateFacialBenefits from "./ChocolateFacialBenefits";
import ChocolateFacialWhy from "./ChocolateFacialWhy";
import ChocolateFacialImg from "./ChocolateFacialImg";

const ChocolateFacialPage = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Chocolate Mint Facial Services in Bangalore | Mint Facials Salon Near
          Me
        </title>
        <meta
          name="description"
          content="Chocolate Mint Facial Services in Bangalore. Self-care and beauty treatments have become essential for maintaining a healthy lifestyle and glowing skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/chocolate-mint-facial-services"
        />
      </Helmet>
      <NavBg />
      <ChocolateFacialImg />
      <ChocolateFacialHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ChocolateFacialUnderstand />
      <ChocolateFacialDiff />
      <ChocolateFacialBenefits />
      <ChocolateFacialWhy />
            
    </div>
  );
};

export default ChocolateFacialPage;
