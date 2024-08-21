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
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import LuminousFacialHead from "./LuminousFacialHead";
import LuminousFacialBenefits from "./LuminousFacialBenefits";
import LuminousFacialCustomer from "./LuminousFacialCustomer";
import LuminousFacialBook from "./LuminousFacialBook";
import LuminousFacialWhat from "./LuminousFacialWhat";
import LuminousFacialWhy from "./LuminousFacialWhy";
import LuminousFacialImg from "./LuminousFacialImg,";

const LuminousFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luminous Lightening Facial Services in Bangalore</title>
        <meta
          name="description"
          content="Luminous Lightening Facial Services in Bangalore by SCENT stands out as a beacon of hope for those looking to restore their skin's natural glow and even tone."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/luminous-lightening-facial-services"
        />
      </Helmet>
      <NavBg />
      <LuminousFacialImg />
      <LuminousFacialHead />
      <LuminousFacialBenefits />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LuminousFacialWhat />
      <LuminousFacialWhy />
      <LuminousFacialCustomer />
      <LuminousFacialBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default LuminousFacial;
