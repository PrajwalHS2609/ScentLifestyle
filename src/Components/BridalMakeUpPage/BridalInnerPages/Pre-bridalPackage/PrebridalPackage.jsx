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
import PrebridalPackageHead from "./PrebridalPackageHead";
import PrebridalPackageBook from "./PrebridalPackageBook";
import PrebridalPackageExpert from "./PrebridalPackageExpert";
import PrebridalPackageWhy from "./PrebridalPackageWhy";
import PrebridalPackageImg from "./PrebridalPackageImg";

const PrebridalPackage = () => {
  return (
    <div className="bridalMakeUpPackage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Pre-Bridal Treatments in Bangalore | Pre-Wedding Makeup Salon Near Me
        </title>
        <meta
          name="description"
          content="Pre-Bridal Treatments in Bangalore. Designed to provide you with comprehensive care and attention, making sure that every aspect of your beauty regimen is covered."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/pre-bridal-treatments"
        />
      </Helmet>
      <NavBg />
      <PrebridalPackageImg />
      <PrebridalPackageHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <PrebridalPackageExpert />
      <PrebridalPackageWhy />
      <PrebridalPackageBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default PrebridalPackage;
