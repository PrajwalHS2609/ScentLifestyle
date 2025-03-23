import React from "react";
import hairTreatment from "./../../../../Images/Hair Treatments/Olaplex.png";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import OlaplexTreatmentInUptownContentHead from './OlaplexTreatmentInUptownContentHead';
import OlaplexTreatmentInUptownContentLast from './OlaplexTreatmentInUptownContentLast';
import { Helmet } from "react-helmet";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
const OlaplexTreatmentInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Olaplex Hair Treatment in Uptown Whitefield| Hair Treatments near
          Whitefield
        </title>
        <meta
          name="description"
          content="Olaplex Hair Treatment in Uptown Whitefield. Whether you’re dealing with heat damage, color-treated hair, or excessive breakage, this revolutionary treatment is the ultimate solution to revive your hair."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/olaplex-hair-treatment-in-uptown-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg
        img={hairTreatment}
        alt="Olaplex Treatment In Uptown"
      />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Olaplex Treatment In Uptown "
      />
      <OlaplexTreatmentInUptownContentHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <OlaplexTreatmentInUptownContentLast />
    </div>
  );
};

export default OlaplexTreatmentInUptown;
