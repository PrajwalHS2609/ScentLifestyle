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
import BalineseseSpaWhy from "./BalineseseSpaWhy";
import BalineseseSpaBenefits from "./BalineseseSpaBenefits";
import BalineseseSpaHead from "./BalineseseSpaHead";
import BalineseseSpaXp from "./BalineseseSpaXp";
import BalineseseSpaCustomer from "./BalineseseSpaCustomer";
import BalineseseSpaBook from "./BalineseseSpaBook";
import NavBg from './../../../NavBg/NavBg';
import BalineseseSpaImg from './BalineseseSpaImg';

const BalineseseSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Balinese Massage in Bangalore | Best Balinese Massage Near Me
        </title>
        <meta
          name="description"
          content="Balinese Massage in Bangalore. Balinese massage combines various techniques to provide a comprehensive healing experience."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/balinese-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BalineseseSpaImg/>
      <InnerNavi link="/spa" service="Spa" currService="Balinesese Massage" />
      <BalineseseSpaHead />
      <BalineseseSpaXp />
      <BalineseseSpaBenefits />
      <BalineseseSpaWhy />
      <BalineseseSpaCustomer />
      <BalineseseSpaBook />
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

export default BalineseseSpa;
