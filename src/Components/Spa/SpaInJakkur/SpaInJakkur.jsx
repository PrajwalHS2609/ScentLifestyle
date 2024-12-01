import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import SpaInJakkurHead from "./SpaInJakkurHead";
import SpaInJakkurWhy from "./SpaInJakkurWhy";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import SpaInJakkurImg from "./SpaInJakkurImg";
import SpaInJakkurExplore from "./SpaInJakkurExplore";
import SpaInJakkurBenefits from "./SpaInJakkurBenefits";
import SpaInJakkurCustomer from "./SpaInJakkurCustomer";
import SpaInJakkurTips from "./SpaInJakkurTips";
import SpaInJakkurBook from "./SpaInJakkurBook";
import Partners from "../../HomePage/Partners/Partners";

const SpaInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spa in Jakkur, Bangalore | Best Spa near Jakkur </title>
        <meta
          name="description"
          content=": Spa in Jakkur, Bangalore. At SCENT, we offer a range of luxurious treatments designed to soothe your mind, body, and soul."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/spa-in-jakkur"
        />
      </Helmet>
      <NavBg />
      <SpaInJakkurImg />
      <InnerNavi link="/spa" service="Spa" currService="Spa in Jp Nagar" />
      <SpaInJakkurHead />
      <SpaInJakkurWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SpaInJakkurExplore />
      <SpaInJakkurBenefits />
      <SpaInJakkurCustomer />
      <SpaInJakkurTips />
      <SpaInJakkurBook />
            
    </div>
  );
};

export default SpaInJakkur;
