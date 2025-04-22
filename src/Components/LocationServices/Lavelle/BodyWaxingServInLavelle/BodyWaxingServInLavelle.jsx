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
import BodyWaxingServInLavelleHead from "./BodyWaxingServInLavelleHead";
import BodyWaxingServInLavelleFooter from "./BodyWaxingServInLavelleFooter";
import LocationServicesImg from "../../LocationServicesImg";
import { Helmet } from "react-helmet";
const BodyWaxingServInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Waxing Services in Lavelle Road, Bangalore | Women Waxing Near Me{" "}
        </title>
        <meta
          name="description"
          content="Body Waxing Services in Lavelle Road, Bangalore. SCENT brings you a complete body waxing experience that leaves your skin smooth, soft, and ready to glow."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-services-in-lavelle-road"
        />
      </Helmet>
      <LocationServicesImg
        img={bodyWaxingBanner}
        alt="Body Waxing In Lavelle"
      />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Body Waxing In Lavelle"
      />
      <BodyWaxingServInLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BodyWaxingServInLavelleFooter />
    </div>
  );
};

export default BodyWaxingServInLavelle;
