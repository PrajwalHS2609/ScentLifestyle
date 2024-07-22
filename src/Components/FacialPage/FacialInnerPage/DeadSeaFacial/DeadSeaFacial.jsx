import React from "react";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import DeadSeaFacialHead from "./DeadSeaFacialHead";
import DeadSeaFacialWhy from "./DeadSeaFacialWhy";
import DeadSeaFacialBenefits from "./DeadSeaFacialBenefits";
import DeadSeaFacialIng from "./DeadSeaFacialIng";
import DeadSeaFacialProcess from "./DeadSeaFacialProcess";
import DeadSeaFacialExp from "./DeadSeaFacialExp";
import DeadSeaFacialCustomer from "./DeadSeaFacialCustomer";

const DeadSeaFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dead Sea Mineral Facial Services in Bangalore | Top Facials Salon Near
          Me Facial Services in Bangalore | Best Facials Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Dead Sea Minerals Facial Services in Bangalore. This exceptional facial harnesses the power of Dead Sea minerals to rejuvenate and revitalize your skin. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/dead-sea-minerals-facial-services"
        />
      </Helmet>
      <NavBg />
      <DeadSeaFacialHead />
      <DeadSeaFacialWhy />
      <DeadSeaFacialBenefits />
      <DeadSeaFacialIng />
      <DeadSeaFacialProcess />
      <DeadSeaFacialExp />
      <DeadSeaFacialCustomer />
      <DeadSeaFacialCustomer />
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

export default DeadSeaFacial;
