import React from "react";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BodyWaxingInLavelleHead from "./BodyWaxingInLavelleHead";
import { Helmet } from "react-helmet";
import NavBg from "./../../NavBg/NavBg";
import BodyWaxingInLavelleImg from "./BodyWaxingInLavelleImg";

const BodyWaxingInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Waxing, Threading & D-Tan in Lavelle Road, Bangalore</title>
        <meta
          name="description"
          content="Body Waxing, Threading & D-Tan in Lavelle Road, Bangalore. At SCENT, we are dedicated to providing exceptional care and results that leave you looking and feeling your best."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-threading-and-d-tan-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <BodyWaxingInLavelleImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing in Lavelle"
      />
      <BodyWaxingInLavelleHead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BodyWaxingInLavelle;
