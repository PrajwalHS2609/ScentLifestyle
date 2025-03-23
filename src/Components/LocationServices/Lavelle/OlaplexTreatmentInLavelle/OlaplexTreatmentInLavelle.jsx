import React from "react";
import OlaplexTreatmentInLavelleContentHead from "./OlaplexTreatmentInLavelleContentHead";
import OlaplexTreatmentInLavelleContentLast from "./OlaplexTreatmentInLavelleContentLast";
import hairTreatment from "./../../../../Images/Hair Treatments/Olaplex.png";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import HairSalonInLavelleImg from "../HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import { Helmet } from "react-helmet";

const OlaplexTreatmentInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Olaplex Hair Treatment in Lavelle Road | Hair Treatments near Lavelle
          Road
        </title>
        <meta
          name="description"
          content="Olaplex Hair Treatment in Lavelle Road. Whether you’re dealing with heat damage, color-treated hair, or excessive breakage, this revolutionary treatment is the ultimate solution to revive your hair."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/olaplex-hair-treatment-in-lavelle-road"
        />
      </Helmet>
      <HairSalonInLavelleImg
        img={hairTreatment}
        alt="Olaplex Treatment In lavelle Road"
      />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Olaplex Treatment In Lavelle Road"
      />
      <OlaplexTreatmentInLavelleContentHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <OlaplexTreatmentInLavelleContentLast />
    </div>
  );
};

export default OlaplexTreatmentInLavelle;
