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
import StoneSpaHead from "./StoneSpaHead";
import StoneSpaBenefits from "./StoneSpaBenefits";
import StoneSpaWhy from "./StoneSpaWhy";
import NavBg from "../../../NavBg/NavBg";
import StoneSpaXp from "./StoneSpaXp";
import StoneSpaCustomer from "./StoneSpaCustomer";
import StoneSpaBook from "./StoneSpaBook";
import StoneSpaImg from "./StoneSpaImg";
const StoneSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hot Stone Therapy Massage in Bangalore | Best Stone Therapy Massage
          Near Me
        </title>
        <meta
          name="description"
          content="Hot Stone Therapy Massage in Bangalore. This unique treatment is designed to provide a deeply relaxing and personalized experience, making it a standout choice for anyone looking to escape the stresses of everyday life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hot-stone-therapy-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <StoneSpaImg/>
      <InnerNavi link="/spa" service="Spa" currService="Stone Therapy" />
      <StoneSpaHead />
      <StoneSpaXp />
      <StoneSpaBenefits />
      <StoneSpaWhy />
      <StoneSpaCustomer />
      <StoneSpaBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
            
    </div>
  );
};

export default StoneSpa;
