import React from "react";
import { Helmet } from "react-helmet";
import lashesUptownImg from "./../../../Images/SahakarNagar/Eye Lashes.png";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import LashesInUptownHead from "./LashesInUptownHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import LashesInUptownWhyChoose from "./LashesInUptownWhyChoose";
import LashesInUptownTypes from "./LashesInUptownTypes";
import LashesInUptownBenefits from "./LashesInUptownBenefits";
import LashesInUptownHow from "./LashesInUptownHow";
import LashesInUptownBook from "./LashesInUptownBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";

const LashesInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Lashes in Uptown Whitefield, Bangalore | Eye Lash Extensions near
          Uptown Whitefield
        </title>
        <meta
          name="description"
          content="Eye Lashes in Uptown Whitefield, Bangalore. We offer a range of lash treatments tailored to give you the perfect look, whether it's subtle enhancement or full-on drama."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes-in-uptown-whitefield-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={lashesUptownImg} alt={lashesUptownImg} />
      <InnerNavi
        link="/eye-lashes"
        service="Eye Lashes"
        currService="Eye Lashes in Uptown"
      />
      <LashesInUptownHead />
      <LashesInUptownWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesInUptownTypes />
      <LashesInUptownBenefits />
      <LashesInUptownHow />
      <LashesInUptownBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default LashesInUptown;
