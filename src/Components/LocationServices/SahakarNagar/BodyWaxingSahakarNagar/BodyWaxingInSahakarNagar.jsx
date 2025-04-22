import React from "react";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import bodyWaxingBanner from "./../../../../Images/Blog/BodyWaxingRight/Banner.png";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BodyWaxingInSahakarNagarHead from "./BodyWaxingInSahakarNagarHead";
import BodyWaxingInSahakarNagarFooterContent from "./BodyWaxingInSahakarNagarFooterContent";
import { Helmet } from "react-helmet";
import LocationImg from "../../../LocationPage/LocationImg/LocationImg";
const BodyWaxingInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Waxing Services in Sahakara Nagar, Bangalore | Women Waxing Near
          Me
        </title>
        <meta
          name="description"
          content="Body Waxing Services in Sahakara Nagar, Bangalore. SCENT brings you a complete body waxing experience that leaves your skin smooth, soft, and ready to glow."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-services-in-sahakara-nagar"
        />
      </Helmet>
      <LocationImg
        img={bodyWaxingBanner}
        alt="Body Waxing In Jakkur"
      />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing In Sahakar Nagar"
      />
      <BodyWaxingInSahakarNagarHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BodyWaxingInSahakarNagarFooterContent />
    </div>
  );
};

export default BodyWaxingInSahakarNagar;
