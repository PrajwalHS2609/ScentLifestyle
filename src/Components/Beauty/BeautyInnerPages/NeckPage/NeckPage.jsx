import React from "react";
import Members from "../../../HomePage/Members/Members";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../../HomePage/Partners/Partners";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import NeckHead from "./NeckHead";
import NeckXp from "./NeckXp";
import NeckWhy from "./NeckWhy";
import NeckBenefits from "./NeckBenefits";
import NeckWhat from "./NeckWhat";
import NeckAftercare from "./NeckAftercare";
import NeckBook from "./NeckBook";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../../NavBg/NavBg";
import NeckImg from "./NeckImg";

const NeckPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Neck Waxing, De-tan & Threading in Bangalore – Book an Appointment!{" "}
        </title>
        <meta
          name="description"
          content="Neck Waxing, De-tan & Threading in Bangalore. At SCENT, we offer a comprehensive range of services designed to address these issues and help you achieve flawless skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/neck-waxing-detan-threading-salon-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <NeckImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Neck"
      />
      <NeckHead />
      <NeckWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NeckXp />
      <NeckBenefits />
      <NeckWhat />
      <NeckAftercare />
      <NeckBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NeckPage;
