import React from "react";
import { Helmet } from "react-helmet";
import BodyWaxingInJakkurImg from "../BodyWaxingInJakkur/BodyWaxingInJakkurImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BodyWaxingInMeadowsHead from "./BodyWaxingInMeadowsHead";
import BodyWaxingInMeadowsAtScent from "./BodyWaxingInMeadowsAtScent";
import BodyWaxingInMeadowsBenefits from "./BodyWaxingInMeadowsBenefits";
import BodyWaxingInMeadowsWhat from "./BodyWaxingInMeadowsWhat";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const BodyWaxingInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Waxing, Threading & D-Tan in Meadows Whitefield, Bangalore
        </title>
        <meta
          name="description"
          content="Body Waxing, Threading & D-Tan in Meadows Whitefield, Bangalore. At SCENT, we are dedicated to providing exceptional care and results that leave you looking and feeling your best."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-threading-and-d-tan-in-meadows-whitefield"
        />
      </Helmet>
      <BodyWaxingInJakkurImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing  in Meadows"
      />
      <BodyWaxingInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BodyWaxingInMeadowsAtScent />
      <BodyWaxingInMeadowsBenefits />
      <BodyWaxingInMeadowsWhat />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BodyWaxingInMeadows;
