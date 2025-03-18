import React from "react";
import { Helmet } from "react-helmet";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";
import HairBotoxNearSahakarNagarHead from "./HairBotoxNearSahakarNagarHead";
import HairBotoxNearSahakarNagarWhyChoose from "./HairBotoxNearSahakarNagarWhyChoose";
import HairBotoxNearSahakarNagarHowLong from "./HairBotoxNearSahakarNagarHowLong";
import HairBotoxNearSahakarNagarBenefits from "./HairBotoxNearSahakarNagarBenefits";
import HairBotoxNearSahakarNagarHow from "./HairBotoxNearSahakarNagarHow";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";

const HairBotoxNearSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Botox Treatments near Sahakara Nagar – SCENT Lifestyle
        </title>
        <meta
          name="description"
          content="Hair Botox Treatments near Sahakara Nagar from SCENT. This non-invasive treatment is designed to rejuvenate your hair, leaving it looking healthier, shinier, and more manageable."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatments-near-sahakara-nagar"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox Near Sahakara Nagar"
      />
      <HairBotoxNearSahakarNagarHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxNearSahakarNagarBenefits />
      <HairBotoxNearSahakarNagarWhyChoose />
      <HairBotoxNearSahakarNagarHow />
      <HairBotoxNearSahakarNagarHowLong />
    </div>
  );
};

export default HairBotoxNearSahakarNagar;
