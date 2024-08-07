import React from "react";
import HairColorHead from "./HairColorHead";
import HairColorWhy from "./HairColorWhy";
import HairColorProcess from "./HairColorProcess";
import HairColorBook from "./HairColorBook";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairColorImg from "./../../HairColorPage/HairColorImg";
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
import HairColorTrend from "./HairColorTrend";
import NavBg from "../../../NavBg/NavBg";

const HairColor = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Colour in Bangalore | Hair Highlights Salon in Bangalore
        </title>
        <meta
          name="description"
          content="Hair Colour in Bangalore. Highlights can range from bold streaks to soft, sun-kissed strands, offering a versatile way to enhance your natural hair color."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-highlights-and-streaks"
        />
      </Helmet>
      <NavBg />
      <HairColorImg />
      <InnerNavi link="/hair-salon" service="Hair Salon" currService="Hair" />
      <HairColorHead />
      <HairColorWhy />
      <HairColorProcess />
      <HairColorTrend />
      <HairColorBook />
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

export default HairColor;
