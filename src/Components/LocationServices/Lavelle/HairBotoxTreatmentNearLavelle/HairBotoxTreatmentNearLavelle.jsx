import React from "react";
import { Helmet } from "react-helmet";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";
import HairBotoxTreatmentNearLavelleHead from "./HairBotoxTreatmentNearLavelleHead";
import HairBotoxTreatmentNearLavelleBenefits from "./HairBotoxTreatmentNearLavelleBenefits";
import HairBotoxTreatmentNearLavelleWhyChoose from "./HairBotoxTreatmentNearLavelleWhyChoose";
import HairBotoxTreatmentNearLavelleWhat from "./HairBotoxTreatmentNearLavelleWhat";
import HairBotoxTreatmentNearLavelleTips from "./HairBotoxTreatmentNearLavelleTips";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInLavelleImg from "../HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";

const HairBotoxTreatmentNearLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Botox Treatments near Lavelle Road – SCENT Lifestyle</title>
        <meta
          name="description"
          content="Hair Botox Treatments near Lavelle Road from SCENT. This non-invasive treatment is designed to rejuvenate your hair, leaving it looking healthier, shinier, and more manageable"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatments-near-lavelle-road"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox in Lavelle Road"
      />
      <HairBotoxTreatmentNearLavelleHead />

      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxTreatmentNearLavelleBenefits />
      <HairBotoxTreatmentNearLavelleWhyChoose />
      <HairBotoxTreatmentNearLavelleWhat />
      <HairBotoxTreatmentNearLavelleTips />
    </div>
  );
};

export default HairBotoxTreatmentNearLavelle;
