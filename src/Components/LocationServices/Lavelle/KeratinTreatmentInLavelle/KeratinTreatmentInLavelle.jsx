import React from "react";
import { Helmet } from "react-helmet";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import KeratinTreatmentInLavelleHead from './KeratinTreatmentInLavelleHead';
import KeratinTreatmentInLavelleContentLast from './KeratinTreatmentInLavelleContentLast';
import HairSalonInLavelleImg from "../HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";

const KeratinTreatmentInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Keratin Hair treatments in Lavelle Road | Hair Spa near Lavelle Road
        </title>
        <meta
          name="description"
          content="Keratin hair treatments in Lavelle Road from SCENT are the perfect solution. Many individuals struggle with unruly hair that lacks shine and strength."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/keratin-hair-treatments-in-lavelle-road"
        />
      </Helmet>
      <HairSalonInLavelleImg
        img={hairTreatment}
        alt="Hair Treatment In lavelle Road"
      />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Keratin In Lavelle Road"
      />
      <KeratinTreatmentInLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <KeratinTreatmentInLavelleContentLast />
    </div>
  );
};

export default KeratinTreatmentInLavelle;
