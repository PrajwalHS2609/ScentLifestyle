import React from "react";
import { Helmet } from "react-helmet";
import KeratinInWhitefieldLastContent from "./KeratinInWhitefieldLastContent";
import KeratinInWhitefieldHead from "./KeratinInWhitefieldHead";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "./../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import InstaFeed from "./../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "./../../../Help/HelpNearYou";
import TextLocReviews from "./../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../../MainServicePages/ServiceWhy/ServiceWhy";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";

const KeratinTreatmentInWhitefield = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Keratin Hair treatments in Whitefield | Hair Spa near Whitefield
        </title>
        <meta
          name="description"
          content="Keratin hair treatments in Whitefield from SCENT are the perfect solution. Many individuals struggle with unruly hair that lacks shine and strength. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/keratin-hair-treatments-in-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Keratin In Whitefield"
      />
      <KeratinInWhitefieldHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <KeratinInWhitefieldLastContent />
    </div>
  );
};

export default KeratinTreatmentInWhitefield;
