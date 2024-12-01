import React from "react";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import DeadSeaFacialHead from "./DeadSeaFacialHead";
import DeadSeaFacialWhy from "./DeadSeaFacialWhy";
import DeadSeaFacialBenefits from "./DeadSeaFacialBenefits";
import DeadSeaFacialIng from "./DeadSeaFacialIng";
import DeadSeaFacialProcess from "./DeadSeaFacialProcess";
import DeadSeaFacialExp from "./DeadSeaFacialExp";
import DeadSeaFacialCustomer from "./DeadSeaFacialCustomer";
import DeadSeaFacialImg from "./DeadSeaFacialImg";

const DeadSeaFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dead Sea Mineral Facial Services in Bangalore | Top Facials Salon Near
          Me Facial Services in Bangalore | Best Facials Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Dead Sea Minerals Facial Services in Bangalore. This exceptional facial harnesses the power of Dead Sea minerals to rejuvenate and revitalize your skin. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/dead-sea-minerals-facial-services"
        />
      </Helmet>
      <NavBg />
      <DeadSeaFacialImg />
      <DeadSeaFacialHead />
      <DeadSeaFacialWhy />
      <DeadSeaFacialBenefits />
      <DeadSeaFacialIng />
      <DeadSeaFacialProcess />
      <DeadSeaFacialExp />
      <DeadSeaFacialCustomer />
            
    </div>
  );
};

export default DeadSeaFacial;
