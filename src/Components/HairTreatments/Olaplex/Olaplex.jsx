import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import BotoxImg from "../Botox/BotoxImg/BotoxImg";
import OlaplexHead from "./OlaplexHead";
import OlaplexBenefits from "./OlaplexBenefits";
import OlaplexHow from "./OlaplexHow";
import OlaplexWhy from "./OlaplexWhy";
import OlaplexWho from "./OlaplexWho";
import OlaplexBook from "./OlaplexBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import OlaplexTreatment from "./../../../Images/Hair Treatments/Olaplex.png";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";

const Olaplex = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Olaplex Hair Treatments in Bangalore | Olaplex Hair Spa & Salon near
          Me{" "}
        </title>
        <meta
          name="description"
          content="Olaplex Hair Treatments in Bangalore. We specialize in providing top-notch hair spa service that restore your hair’s health, strength, and shine. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/olaplex-hair-treatments-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BotoxImg img={OlaplexTreatment} />
      {/* <InnerNavi link="/spa" service="Spa" currService="Head Massage" /> */}
      <OlaplexHead />
      <OlaplexBenefits />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <OlaplexHow />
      <OlaplexWhy />
      <OlaplexWho />
      <OlaplexBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default Olaplex;
