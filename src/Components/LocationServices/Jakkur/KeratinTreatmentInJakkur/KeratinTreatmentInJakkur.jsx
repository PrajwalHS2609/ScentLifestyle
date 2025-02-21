import React from "react";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import KeratinInJakkurContentHead from './KeratinInJakkurContentHead';
import KeratinInJakkurContentLast from './KeratinInJakkurContentLast';
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";

const KeratinTreatmentInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keratin Hair treatments in Jakkur | Hair Spa near Jakkur</title>
        <meta
          name="description"
          content="Keratin hair treatments in Jakkur from SCENT are the perfect solution. Many individuals struggle with unruly hair that lacks shine and strength. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/keratin-hair-treatments-in-jakkur"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Keratin In Jakkur"
      />
      <KeratinInJakkurContentHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <KeratinInJakkurContentLast />
    </div>
  );
};

export default KeratinTreatmentInJakkur;
