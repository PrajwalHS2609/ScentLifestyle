import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import BeautyInUptownHead from "./BeautyInUptownHead";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyInUptownWhyChoose from "./BeautyInUptownWhyChoose";
import BeautyInUptownBook from "./BeautyInUptownBook";
import BeautyInUptownBodyWaxing from "./BeautyInUptownBodyWaxing";
import BeautyInUptownThreading from "./BeautyInUptownThreading";
import BeautyInUptownDtan from "./BeautyInUptownDtan";
import BeautyInUptownXp from "./BeautyInUptownXp";
import bodyWaxingJpImg from "./../../../../Images/SahakarNagar/Waxing, Threding & D-Tan.png";
import LocationServicesImg from "../../LocationServicesImg";

const BeautyInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Waxing, Threading & D-Tan in Uptown Whitefield, Bangalore
        </title>
        <meta
          name="description"
          content="Body Waxing, Threading & D-Tan in Uptown Whitefield, Bangalore. At SCENT, we are dedicated to providing exceptional care and results that leave you looking and feeling your best."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-threading-and-d-tan-in-uptown-whitefield-bangalore"
        />
      </Helmet>
      <LocationServicesImg img={bodyWaxingJpImg} alt="bodyWaxingJpImg" />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing  in Uptown "
      />
      <BeautyInUptownHead />
      <BeautyInUptownWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyInUptownBodyWaxing />
      <BeautyInUptownThreading />
      <BeautyInUptownDtan />
      <BeautyInUptownXp />
      <BeautyInUptownBook />
            
    </div>
  );
};

export default BeautyInUptown;
