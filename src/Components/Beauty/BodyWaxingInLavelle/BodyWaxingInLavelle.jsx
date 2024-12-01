import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BodyWaxingInLavelleHead from "./BodyWaxingInLavelleHead";
import { Helmet } from "react-helmet";
import NavBg from "./../../NavBg/NavBg";
import HairSalonInLavelleImg from "../../HairServicePage/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import beautylavelleImg from "./../../../Images/SahakarNagar/Waxing, Threding & D-Tan.png";

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
      <HairSalonInLavelleImg img={beautylavelleImg} alt={beautylavelleImg} />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing in Lavelle"
      />
      <BodyWaxingInLavelleHead />
            
    </div>
  );
};

export default BodyWaxingInLavelle;
