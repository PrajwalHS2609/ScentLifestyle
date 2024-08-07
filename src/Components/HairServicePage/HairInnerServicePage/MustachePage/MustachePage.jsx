import React from "react";
import MustacheHead from "./MustacheHead";
import MustacheWhy from "./MustacheWhy";
import MustacheService from "./MustacheService";
import MustacheBook from "./MustacheBook";
import MustacheXp from "./MustacheXp";
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
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import MustacheImg from "./MustacheImg";

const MustachePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mustache Styling in Bangalore | Mustache Salon Near Me </title>
        <meta
          name="description"
          content="Mustache Styling in Bangalore. Whether you prefer a classic handlebar, a sleek chevron, or a bold pencil mustache, our skilled stylists are here to cater to your unique preferences."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/mustache-styling "
        />
      </Helmet>
      <NavBg />
      <MustacheImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Mustache"
      />
      <MustacheHead />
      <MustacheWhy />
      <MustacheService />
      <MustacheXp />
      <MustacheBook />
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

export default MustachePage;
