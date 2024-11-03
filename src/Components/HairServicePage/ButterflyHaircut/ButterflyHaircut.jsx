import React from "react";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import ButterflyHaircutHead from "./ButterflyHaircutHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import ButterflyHaircutBenefit from "./ButterflyHaircutBenefit";
import ButterflyHaircutStyling from "./ButterflyHaircutStyling";
import ButterflyHaircutWhyChoose from "./ButterflyHaircutWhyChoose";
import ButterflyHaircutImg from "./ButterflyHaircutImg";

const ButterflyHaircut = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Butterfly Hair Cut for Women in Bangalore 
        </title>
        <meta
          name="description"
          content="Butterfly Hair Cut for Women in Bangalore has emerged as a versatile and stylish choice for women, whether they have long or short hair. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/butterfly-haircut-for-women-in-bangalore"
        />
      </Helmet>
      <ButterflyHaircutImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Butterfly Haircut"
      />
      <ButterflyHaircutHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ButterflyHaircutBenefit />
      <ButterflyHaircutStyling />
      <ButterflyHaircutWhyChoose />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default ButterflyHaircut;
