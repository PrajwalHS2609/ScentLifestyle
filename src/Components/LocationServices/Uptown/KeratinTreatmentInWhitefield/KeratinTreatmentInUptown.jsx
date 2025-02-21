import React from "react";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "./../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import InstaFeed from "./../../../HomePage/InstaFeed/InstaFeed";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png"
import HelpNearYou from "./../../../Help/HelpNearYou";
import TextLocReviews from "./../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../../MainServicePages/ServiceWhy/ServiceWhy";
import KeratinInUptownLastContent from "./KeratinInUptownLastContent";
import KeratinInWhitefieldHead from "../../Whitefield/KeratinTreatmentInWhitefield/KeratinInWhitefieldHead";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
const KeratinTreatmentInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Keratin Hair treatments in Uptown Whitefield | Hair Spa near
          Whitefield
        </title>
        <meta
          name="description"
          content="Keratin hair treatments in Uptown Whitefield from SCENT are the perfect solution. Many individuals struggle with unruly hair that lacks shine and strength. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/keratin-hair-treatments-in-uptown-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment In Uptown" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Keratin In Uptown"
      />
      <KeratinInWhitefieldHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <KeratinInUptownLastContent />
    </div>
  );
};

export default KeratinTreatmentInUptown;
