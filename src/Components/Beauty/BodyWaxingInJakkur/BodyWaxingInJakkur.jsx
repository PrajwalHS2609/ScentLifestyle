import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import BodyWaxingInJakkurHead from "./BodyWaxingInJakkurHead";
import BodyWaxingInJakkurWhy from "./BodyWaxingInJakkurWhy";
import BodyWaxingInJakkurOur from "./BodyWaxingInJakkurOur";
import BodyWaxingInJakkurBenefits from "./BodyWaxingInJakkurBenefits";
import BodyWaxingInJakkurCustomer from "./BodyWaxingInJakkurCustomer";
import BodyWaxingInJakkurTips from "./BodyWaxingInJakkurTips";
import BodyWaxingInJakkurBook from "./BodyWaxingInJakkurBook";
import BodyWaxingInJakkurImg from './BodyWaxingInJakkurImg';

const BodyWaxingInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Waxing, Threading & D-Tan in Jakkur, Bangalore </title>
        <meta
          name="description"
          content="Body Waxing, Threading & D-Tan in Jakkur, Bangalore. At SCENT, we are dedicated to providing exceptional care and results that leave you looking and feeling your best."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-threading-and-d-tan-in-jakkur"
        />
      </Helmet>
      <NavBg />
      <BodyWaxingInJakkurImg />
      <InnerNavi
        link="/nail-salon"
        service="Hair Salon"
        currService="Nail salon in Jp Nagar"
      />
      <BodyWaxingInJakkurHead />
      <BodyWaxingInJakkurWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BodyWaxingInJakkurOur />
      <BodyWaxingInJakkurBenefits />
      <BodyWaxingInJakkurCustomer />
      <BodyWaxingInJakkurTips />
      <BodyWaxingInJakkurBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BodyWaxingInJakkur;