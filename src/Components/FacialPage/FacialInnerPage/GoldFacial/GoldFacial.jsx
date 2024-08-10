import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import GoldFacialHead from "./GoldFacialHead";
import GoldFacialBenefits from "./GoldFacialBenefits";
import GoldFacialXp from "./GoldFacialXp";
import GoldFacialChoose from "./GoldFacialChoose";
import GoldFacialImg from "./GoldFacialImg";

const GoldFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gold Facial Services in Bangalore | Premium Facials Salon Near Me
        </title>
        <meta
          name="description"
          content="Gold Facial Services in Bangalore. These services promise to restore youthful radiance and combat the signs of aging, making them a favorite among the city's residents."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/gold-facial-services"
        />
      </Helmet>
      <NavBg />
      <GoldFacialImg />
      <GoldFacialHead />
      <GoldFacialBenefits />
      <GoldFacialXp />
      <GoldFacialChoose />

      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default GoldFacial;
