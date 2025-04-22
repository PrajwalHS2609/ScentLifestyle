import React from "react";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import BodyWaxingInLavelleHead from "./BodyWaxingInLavelleHead";
import { Helmet } from "react-helmet";
import beautylavelleImg from "./../../../../Images/SahakarNagar/Waxing, Threding & D-Tan.png";
import LocationServicesImg from "../../LocationServicesImg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../../Help/HelpNearYou";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../../HomePage/Partners/Partners";

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
      <LocationServicesImg img={beautylavelleImg} alt="beautylavelleImg" />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing in Lavelle"
      />
      <BodyWaxingInLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
            
    </div>
  );
};

export default BodyWaxingInLavelle;
