import React from "react";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import Partners from "../../../HomePage/Partners/Partners";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import AntiAgeFacialHead from "./AntiAgeFacialHead";
import AntiAgeFacialPop from "./AntiAgeFacialPop";
import AntiAgeFacialBenefits from "./AntiAgeFacialBenefits";
import AntiAgeFacialFind from "./AntiAgeFacialFind";
import { Helmet } from "react-helmet";
import AntiAgeFacialImg from "./AntiAgeFacialImg";

const AntiAgeFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Anti-Ageing Facial Services in Bangalore | Premium Facials Salon Near
          Me
        </title>
        <meta
          name="description"
          content="Anti-Ageing Facial Services in Bangalore. These services promise to restore youthful radiance and combat the signs of aging, making them a favorite among the city's residents."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/anti-ageing-facial-services"
        />
      </Helmet>
      <NavBg />
      <AntiAgeFacialImg/>
      <AntiAgeFacialHead />
      <AntiAgeFacialPop />
      <AntiAgeFacialBenefits />
      <AntiAgeFacialFind />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default AntiAgeFacial;
