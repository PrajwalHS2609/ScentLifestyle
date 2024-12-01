import React from "react";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import BrazilianFacialHead from "./BrazilianFacialHead";
import BrazilianFacialBenefits from "./BrazilianFacialBenefits";
import BrazilianFacialIng from "./BrazilianFacialIng";
import BrazilianFacialProcess from "./BrazilianFacialProcess";
import BrazilianFacialFind from "./BrazilianFacialFind";
import BrazilianFacialImg from "./BrazilianFacialImg";

const BrazilianFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brazilian Skin Lightening Facial Services in Bangalore </title>
        <meta
          name="description"
          content="Brazilian Skin Lightening Facial Services in Bangalore. This specialized facial treatment aims to lighten and brighten the skin, providing a radiant and even-toned complexion."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/brazilian-skin-lightening-facial-services"
        />
      </Helmet>
      <NavBg />
      <BrazilianFacialImg />
      <BrazilianFacialHead />
      <BrazilianFacialIng />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BrazilianFacialProcess />
      <BrazilianFacialBenefits />
      <BrazilianFacialFind />
            
    </div>
  );
};

export default BrazilianFacial;
