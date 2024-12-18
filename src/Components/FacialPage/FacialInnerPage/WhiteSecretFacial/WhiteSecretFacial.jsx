import React from "react";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../../Help/HelpNearYou";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../../HomePage/Partners/Partners";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Members from "../../../HomePage/Members/Members";
import WhiteSecretFacialHead from "./WhiteSecretFacialHead";
import WhiteSecretFacialUnderstand from "./WhiteSecretFacialUnderstand";
import WhiteSecretFacialDiff from "./WhiteSecretFacialDiff";
import WhiteSecretFacialBenefits from "./WhiteSecretFacialBenefits";
import WhiteSecretFacialWhy from "./WhiteSecretFacialWhy";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import WhiteSecretFacialImg from "./WhiteSecretFacialImg";

const WhiteSecretFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          White Secret Facial Services in Bangalore | White Facials Salon Near
          Me{" "}
        </title>
        <meta
          name="description"
          content="White Secret Facial Services in Bangalore. Designed to provide a luxurious and effective solution for achieving luminous and youthful skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/white-secret-facial-services"
        />
      </Helmet>
      <NavBg />
      <WhiteSecretFacialImg />
      <WhiteSecretFacialHead />
      <WhiteSecretFacialUnderstand />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhiteSecretFacialDiff />
      <WhiteSecretFacialBenefits />
      <WhiteSecretFacialWhy />
    </div>
  );
};

export default WhiteSecretFacial;
