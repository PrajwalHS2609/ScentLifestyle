import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import ScalpMassagerInLavelleHead from "./ScalpMassagerInLavelleHead";
import ScalpMassagerInLavelleLastContent from "./ScalpMassagerInLavelleLastContent";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "./../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import InstaFeed from "./../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "./../../../Help/HelpNearYou";
import TextLocReviews from "./../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../../MainServicePages/ServiceWhy/ServiceWhy";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";

const ScalpMassagerInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Scalp Massagers in Lavelle Road | Hair Spa Price in Lavelle Road{" "}
        </title>
        <meta
          name="description"
          content="Scalp Massagers in Lavelle Road, At SCENT, we provide high-quality scalp massagers that not only offer relaxation but also promote hair and scalp health."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-massagers-in-lavelle-road"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Scalp Massager In Lavelle Road"
      />
      <ScalpMassagerInLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ScalpMassagerInLavelleLastContent />
    </div>
  );
};

export default ScalpMassagerInLavelle;
