import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import ScalpMassagerInWhitefieldHead from "./ScalpMassagerInWhitefieldHead";
import ScalpMassagerInWhitefieldLast from "./ScalpMassagerInWhitefieldLast";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "./../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import InstaFeed from "./../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "./../../../Help/HelpNearYou";
import TextLocReviews from "./../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../../MainServicePages/ServiceWhy/ServiceWhy";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";

const ScalpMassagerInWhitefield = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Scalp Massagers in Whitefield | Hair Spa Price in Whitefield{" "}
        </title>
        <meta
          name="description"
          content="Scalp Massagers in Whitefield, At SCENT, we provide high-quality scalp massagers that not only offer relaxation but also promote hair and scalp health."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-massagers-in-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg
        img={hairTreatment}
        alt="Hair Treatment Whitefield"
      />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Scalp Massager In Whitefield"
      />
      <ScalpMassagerInWhitefieldHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ScalpMassagerInWhitefieldLast />
    </div>
  );
};

export default ScalpMassagerInWhitefield;
