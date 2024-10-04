import React from "react";
import { Helmet } from "react-helmet";
import SpaInLavelleImg from "./../SpaInLavelle/SpaInLavelleImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import SpaInUptownHead from "./SpaInUptownHead";
import SpaInUptownWhyChoose from "./SpaInUptownWhyChoose";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import SpaInUptownSignature from "./SpaInUptownSignature";
import SpaInUptownXp from "./SpaInUptownXp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const SpaInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Spa in Uptown Whitefield, Bangalore | Best Spa near Uptown Whitefield{" "}
        </title>
        <meta
          name="description"
          content="Spa in Uptown Whitefield, Bangalore. At SCENT, we offer a range of luxurious treatments designed to soothe your mind, body, and soul."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/spa-in-uptown-whitefield-bangalore"
        />
      </Helmet>
      <SpaInLavelleImg />
      <InnerNavi link="/spa" service="Spa" currService="Spa in Uptown" />
      <SpaInUptownHead />
      <SpaInUptownWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SpaInUptownSignature />
      <SpaInUptownXp />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default SpaInUptown;
