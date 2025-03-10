import React from "react";
import ScalpMassagerInSahakarNagarHead from "./ScalpMassagerInSahakarNagarHead";
import ScalpMassagerInSahakarNagarLast from "./ScalpMassagerInSahakarNagarLast";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import { Helmet } from "react-helmet";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";

const ScalpMassagerInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Scalp Massagers in Sahakara Nagar | Hair Scalp Treatment in Sahakara
          Nagar
        </title>
        <meta
          name="description"
          content="Scalp Massagers in Sahakara Nagar, At SCENT, we provide high-quality scalp massagers that not only offer relaxation but also promote hair and scalp health."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-massagers-in-sahakara-nagar"
        />
      </Helmet>
      <HairSalonInLavelleImg
        img={hairTreatment}
        alt="Hair Treatment Sahakara Nagar"
      />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Scalp Massager In Sahakara Nagar"
      />
      <ScalpMassagerInSahakarNagarHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ScalpMassagerInSahakarNagarLast />
    </div>
  );
};

export default ScalpMassagerInSahakarNagar;
