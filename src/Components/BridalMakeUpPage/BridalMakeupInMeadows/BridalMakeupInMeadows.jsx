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
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import BridalMakeupInMeadowsHead from "./BridalMakeupInMeadowsHead";
import BridalMakeupInMeadowsChoose from "./BridalMakeupInMeadowsChoose";
import BridalMakeupInMeadowsFull from "./BridalMakeupInMeadowsFull";
import BridalMakeupInMeadowsMakeup from "./BridalMakeupInMeadowsMakeup";
import BridalMakeupInMeadowsTrust from "./BridalMakeupInMeadowsTrust";
import BridalMakeupInMeadowsPre from "./BridalMakeupInMeadowsPre";
import BridalMakeupInMeadowsEnsuring from "./BridalMakeupInMeadowsEnsuring";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import bridalMeadowsImg from "./../../../Images/JP_Nagar/Bridal Makeup.png";

const BridalMakeupInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup in Meadows Whitefield, Bangalore | Bridal Makeup near
          Whitefield
        </title>
        <meta
          name="description"
          content="Bridal Makeup in Meadows Whitefield, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-in-meadows-whitefield "
        />
      </Helmet>
      <HairSalonInMeadowsImg img={bridalMeadowsImg} alt={bridalMeadowsImg} />
      <InnerNavi
        link="/bridal-makeup"
        service="Bridal Makeup"
        currService="Bridal Makeup in Meadows"
      />
      <BridalMakeupInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalMakeupInMeadowsChoose />
      <BridalMakeupInMeadowsFull />
      <BridalMakeupInMeadowsPre/>
      <BridalMakeupInMeadowsMakeup />
      <BridalMakeupInMeadowsEnsuring/>
      <BridalMakeupInMeadowsTrust />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BridalMakeupInMeadows;
