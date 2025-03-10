import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import ScalpMassagerInJakkurHead from './ScalpMassagerInJakkurHead';
import ScalpMassagerInJakkurLastContent from "./ScalpMassagerInJakkurLastContent";
import Members from './../../../HomePage/Members/Members';
import OurSalon from './../../../HomePage/OurSalon/OurSalon';
import Partners from './../../../HomePage/Partners/Partners';
import HelpNearYou from './../../../Help/HelpNearYou';
import TextLocReviews from './../../../TextLocReviews/TextLocReviews';
import ServiceWhy from './../../../MainServicePages/ServiceWhy/ServiceWhy';
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";

const ScalpMassagerInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Scalp Massagers in Jakkur | Hair Spa Price in Jakkur        </title>
        <meta
          name="description"
          content="Scalp Massagers in Jakkur, At SCENT, we provide high-quality scalp massagers that not only offer relaxation but also promote hair and scalp health."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-massagers-in-jakkur"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Scalp Massager In Jakkur"
      />
      <ScalpMassagerInJakkurHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ScalpMassagerInJakkurLastContent />
    </div>
  );
};

export default ScalpMassagerInJakkur;
