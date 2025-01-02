import React from "react";
import LashesInMeadowsHead from "./LashesInMeadowsHead";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import LashesInMeadowsWhyChoose from "./LashesInMeadowsWhyChoose";
import LashesInMeadowsTypes from "./LashesInMeadowsTypes";
import LashesInMeadowsBenefits from "./LashesInMeadowsBenefits";
import LashesInMeadowsHow from "./LashesInMeadowsHow";
import LashesInMeadowsWhy from "./LashesInMeadowsWhy";
import LashesInMeadowsBook from "./LashesInMeadowsBook";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import lashesMeadowsImg from "./../../../../Images/SahakarNagar/Eye Lashes.png";
import LashesLocationImg from "../LashesLocationImg";

const LashesInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Lashes in Meadows Whitefield, Bangalore | Eye Lash Extensions near
          Whitefield
        </title>
        <meta
          name="description"
          content="Eye Lashes in Meadows Whitefield, Bangalore. We offer a range of lash treatments tailored to give you the perfect look, whether it's subtle enhancement or full-on drama"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes-in-meadows-whitefield"
        />
      </Helmet>
      <LashesLocationImg img={lashesMeadowsImg} alt={lashesMeadowsImg} />
      <InnerNavi
        link="/eye-lashes"
        service="Eye Lashes"
        currService="Eye Lashes in Meadows"
      />
      <LashesInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesInMeadowsWhyChoose />
      <LashesInMeadowsTypes />
      <LashesInMeadowsBenefits />
      <LashesInMeadowsHow />
      <LashesInMeadowsWhy />
      <LashesInMeadowsBook />
            
    </div>
  );
};

export default LashesInMeadows;
