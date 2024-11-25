import React from "react";
import { Helmet } from "react-helmet";
import bridalUptownImg from "./../../../Images/SahakarNagar/Bridal Makeup.png";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BridalMakeupInUptownHead from "./BridalMakeupInUptownHead";
import BridalMakeupInUptownWhyChoose from "./BridalMakeupInUptownWhyChoose";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import BridalMakeupInUptownWhat from "./BridalMakeupInUptownWhat";
import BridalMakeupInUptownTrend from "./BridalMakeupInUptownTrend";
import BridalMakeupInUptownXp from "./BridalMakeupInUptownXp";
import BridalMakeupInUptownBook from "./BridalMakeupInUptownBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const BridalMakeupInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup in Uptown Whitefield, Bangalore | Bridal Makeup near
          Uptown Whitefield
        </title>
        <meta
          name="description"
          content="Bridal Makeup in Uptown Whitefield, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-in-uptown-whitefield-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={bridalUptownImg} alt={bridalUptownImg} />
      <InnerNavi
        link="/bridal-makeup"
        service="Bridal Makeup"
        currService="Bridal Makeup in Uptown"
      />
      <BridalMakeupInUptownHead />
      <BridalMakeupInUptownWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalMakeupInUptownWhat />
      <BridalMakeupInUptownTrend />
      <BridalMakeupInUptownXp />
      <BridalMakeupInUptownBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BridalMakeupInUptown;
