import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairScalpTreatmentBenefits from "./HairScalpTreatmentBenefits";
import HairScalpTreatmentCommon from "./HairScalpTreatmentCommon";
import HairScalpTreatmentProcess from "./HairScalpTreatmentProcess";
import HairScalpTreatmentWhat from './HairScalpTreatmentWhat';
import HairScalpTreatmentTips from "./HairScalpTreatmentTips";
import HairScalpTreatmentTransform from "./HairScalpTreatmentTransform";
import HairScalpTreatmentHead from './HairScalpTreatmentHead';
import hairScalpTreatment from "./../../../Images/SahakarNagar/Hair.png"
import HairSubServiceImg from "../HairSubServiceImg";

const HairScalpTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Scalp Treatment in Bangalore by SCENT</title>
        <meta
          name="description"
          content="Hair Scalp Treatment in Bangalore by SCENT. Whether you’re battling dandruff, an itchy scalp, or hair thinning, our expert team is here to revitalize your scalp and restore your hair’s natural glory."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-scalp-treatment-in-bangalore"
        />
      </Helmet>
      <HairSubServiceImg img={hairScalpTreatment} alt="HairScalpTreatment" />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Scalp Treatment"
      />
      <HairScalpTreatmentHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
<HairScalpTreatmentBenefits/>
<HairScalpTreatmentCommon/>
<HairScalpTreatmentProcess/>
<HairScalpTreatmentWhat/>
<HairScalpTreatmentTips/>
<HairScalpTreatmentTransform/>
    </div>
  );
};

export default HairScalpTreatment;
