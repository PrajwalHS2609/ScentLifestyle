import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import beautySahakarImg from "./../../../../Images/SahakarNagar/Waxing, Threding & D-Tan.png";
import BeautyInSahakarNagarHead from "./BeautyInSahakarNagarHead";
import BeautyInSahakarNagarWhy from "./BeautyInSahakarNagarWhy";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyInSahakarNagarBenefits from "./BeautyInSahakarNagarBenefits";
import BeautyInSahakarNagarBook from "./BeautyInSahakarNagarBook";
import BeautyLocationImg from "../../BeautyLocationServices/BeautyLocationImg";

const BeautyInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Waxing, Threading & D-Tan in Sahakara Nagar, Bangalore
        </title>
        <meta
          name="description"
          content="Body Waxing, Threading & D-Tan in Sahakara Nagar, Bangalore. At SCENT, we are dedicated to providing exceptional care and results that leave you looking and feeling your best."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-threading-and-d-tan-in-sahakara-nagar-bangalore"
        />
      </Helmet>
      <BeautyLocationImg img={beautySahakarImg} alt="beautySahakarImg" />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing  in SahakarNagar"
      />
      <BeautyInSahakarNagarHead />
      <BeautyInSahakarNagarWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyInSahakarNagarBenefits />
      <BeautyInSahakarNagarBook />
            
    </div>
  );
};

export default BeautyInSahakarNagar;
