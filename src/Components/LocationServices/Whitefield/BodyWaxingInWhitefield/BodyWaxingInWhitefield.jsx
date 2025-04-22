import React from "react";
import bodyWaxingBanner from "./../../../../Images/Blog/BodyWaxingRight/Banner.png";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import LocationServicesImg from "../../LocationServicesImg";
import BodyWaxingInWhitefieldHead from './BodyWaxingInWhitefieldHead';
import BodyWaxingInWhitefieldFooterContent from "./BodyWaxingInWhitefieldFooterContent";
import { Helmet } from "react-helmet";
const BodyWaxingInWhitefield = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Waxing Services in Whitefield, Bangalore | Women Waxing Near Me{" "}
        </title>
        <meta
          name="description"
          content="Body Waxing Services in Whitefield, Bangalore. SCENT brings you a complete body waxing experience that leaves your skin smooth, soft, and ready to glow."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-services-in-whitefield"
        />
      </Helmet>
      <LocationServicesImg
        img={bodyWaxingBanner}
        alt="Body Waxing In Whitefield"
      />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing In Whitefield"
      />
      <BodyWaxingInWhitefieldHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BodyWaxingInWhitefieldFooterContent />
    </div>
  );
};

export default BodyWaxingInWhitefield;
