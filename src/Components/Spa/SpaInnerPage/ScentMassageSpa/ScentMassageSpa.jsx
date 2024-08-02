import React from "react";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "../../../Beauty/BeautyRead/BeautyRead";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import ScentMassageSpaHead from "./ScentMassageSpaHead";
import ScentMassageSpaBenefits from "./ScentMassageSpaBenefits";
import ScentMassageSpaWhy from "./ScentMassageSpaWhy";
import NavBg from './../../../NavBg/NavBg';
import ScentMassageSpaImg from './ScentMassageSpaImg';
const ScentMassageSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Scent Signature Massage in Bangalore | Best Massage & Spa Near Me
        </title>
        <meta
          name="description"
          content="Scent Signature Massage in Bangalore. This unique treatment is designed to provide a deeply relaxing and personalized experience, making it a standout choice for anyone looking to escape the stresses of everyday life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scent-signature-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <ScentMassageSpaImg />
      <InnerNavi
        link="/spa"
        service="Spa"
        currService="Scent Signature Massage"
      />
      <ScentMassageSpaHead />
      <ScentMassageSpaBenefits />
      <ScentMassageSpaWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default ScentMassageSpa;
