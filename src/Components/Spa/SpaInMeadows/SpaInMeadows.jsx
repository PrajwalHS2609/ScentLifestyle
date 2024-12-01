import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import SpaInMeadowsHead from "./SpaInMeadowsHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import SpaInMeadowsRelax from "./SpaInMeadowsRelax";
import SpaInMeadowsBenefits from "./SpaInMeadowsBenefits";
import SpaInMeadowsWhat from "./SpaInMeadowsWhat";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import spaMeadowsImg from "./../../../Images/SahakarNagar/Spa.png";

const SpaInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Spa in Meadows Whitefield, Bangalore | Best Spa near Whitefield
        </title>
        <meta
          name="description"
          content="Spa in Meadows Whitefield, Bangalore. At SCENT, we offer a range of luxurious treatments designed to soothe your mind, body, and soul."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/spa-in-meadows-whitefield"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={spaMeadowsImg} alt={spaMeadowsImg} />
      <InnerNavi link="/spa" service="Spa" currService="Sap in Meadows" />
      <SpaInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SpaInMeadowsRelax />
      <SpaInMeadowsBenefits />
      <SpaInMeadowsWhat />
            
    </div>
  );
};

export default SpaInMeadows;
