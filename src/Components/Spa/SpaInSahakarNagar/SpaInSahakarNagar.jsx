import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import spaSahakarImg from "./../../../Images/JP_Nagar/Spa.png";
import SpaInSahakarNagarHead from "./SpaInSahakarNagarHead";
import Members from "../../HomePage/Members/Members";
import SpaDayBenefits from "../../BlogPage/BlogInnerPages/SpaInnerPages/SpaDay/SpaDayBenefits";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import SpaInSahakarNagarWhy from "./SpaInSahakarNagarWhy";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import SpaInSahakarNagarHow from "./SpaInSahakarNagarHow";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const SpaInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Spa in Sahakara Nagar, Bangalore | Best Spa near Sahakara Nagar{" "}
        </title>
        <meta
          name="description"
          content="Spa in Sahakara Nagar, Bangalore. At SCENT, we offer a range of luxurious treatments designed to soothe your mind, body, and soul."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/spa-in-sahakara-nagar-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={spaSahakarImg} alt={spaSahakarImg} />
      <InnerNavi link="/spa" service="Spa" currService="Sap in Meadows" />
      <SpaInSahakarNagarHead />
      <SpaInSahakarNagarWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SpaDayBenefits />
      <SpaInSahakarNagarHow />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default SpaInSahakarNagar;
