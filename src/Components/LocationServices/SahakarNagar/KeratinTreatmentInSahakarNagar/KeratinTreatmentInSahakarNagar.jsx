import React from "react";
import KeratinSahakarNagarContentHead from "./KeratinSahakarNagarContentHead";
import KeratinSahakarNagarContentLast from "./KeratinSahakarNagarContentLast";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import Members from './../../../HomePage/Members/Members';
import OurSalon from './../../../HomePage/OurSalon/OurSalon';
import Partners from './../../../HomePage/Partners/Partners';
import InstaFeed from './../../../HomePage/InstaFeed/InstaFeed';
import HelpNearYou from './../../../Help/HelpNearYou';
import TextLocReviews from './../../../TextLocReviews/TextLocReviews';
import ServiceWhy from './../../../MainServicePages/ServiceWhy/ServiceWhy';
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";

const KeratinTreatmentInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Keratin Hair treatments in Sahakara Nagar | Hair Spa near Sahakara
          Nagar{" "}
        </title>
        <meta
          name="description"
          content="Keratin hair treatments in Sahakara Nagar from SCENT are the perfect solution. Many individuals struggle with unruly hair that lacks shine and strength."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/keratin-hair-treatments-in-sahakara-nagar"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Keratin In Sahakara Nagar"
      />
      <KeratinSahakarNagarContentHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <KeratinSahakarNagarContentLast />
    </div>
  );
};

export default KeratinTreatmentInSahakarNagar;
