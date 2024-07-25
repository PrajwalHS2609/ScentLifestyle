import React from "react";
import { Helmet } from "react-helmet";
import AcneCureFacialHead from "./AcneCureFacialHead";
import AcneCureFacialUnderstand from "./AcneCureFacialUnderstand";
import AcneCureFacialService from "./AcneCureFacialService";
import AcneCureFacialBenefits from "./AcneCureFacialBenefits";
import AcneCureFacialWhy from "./AcneCureFacialWhy";
import AcneCureFacialXp from "./AcneCureFacialXp";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";

const AcneCureFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Acne Cure Facial Services in Bangalore | Acne Facials Salon Near Me
        </title>
        <meta
          name="description"
          content="Acne Cure Facial Services in Bangalore. We understand the importance of having clear and healthy skin, which is why we offer specialized treatments. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/acne-cure-facial-services"
        />
      </Helmet>
      <NavBg />
    <AcneCureFacialHead/>
    <AcneCureFacialUnderstand/>
    <AcneCureFacialService/>
    <AcneCureFacialBenefits/>
    <AcneCureFacialWhy/>
    <AcneCureFacialXp/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default AcneCureFacial;
