import React from "react";
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
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import BeardHead from "./BeardHead";
import BeardDiscover from "./BeardDiscover";
import BeardXp from "./BeardXp";
import BeardWhy from "./BeardWhy";
import BeardBook from "./BeardBook";
import NavBg from "../../../NavBg/NavBg";
import BeardImg from "./BeardImg";

const BeardPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beard Stylist in Bangalore | Beard Salon Near Me</title>
        <meta
          name="description"
          content="Beard Stylist in Bangalore. A well-groomed beard can transform a man's appearance, adding a touch of elegance and confidence."
        />
        <link rel="canonical" href="https://scentlifestyle.com/beard" />
      </Helmet>
      <NavBg />
      <BeardImg />
      <InnerNavi link="/hair-salon" service="Hair Salon" currService="Beard" />
      <BeardHead />
      <BeardDiscover />
      <BeardXp />
      <BeardWhy />
      <BeardBook />
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

export default BeardPage;
