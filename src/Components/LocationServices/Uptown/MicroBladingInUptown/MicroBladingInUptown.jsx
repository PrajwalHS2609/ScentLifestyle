import React from "react";
import microbladingUptownImg from "./../../../../Images/SahakarNagar/Eyeborw Microblading.png";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import MicroBladingInUptownHead from "./MicroBladingInUptownHead";
import MicroBladingInUptownWhyChoose from "./MicroBladingInUptownWhyChoose";
import MicroBladingInUptownXp from "./MicroBladingInUptownXp";
import MicroBladingInUptownBenefits from "./MicroBladingInUptownBenefits";
import MicroBladingInUptownBook from "./MicroBladingInUptownBook";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import LocationServicesImg from "../../LocationServicesImg";

const MicroBladingInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eyebrow Microblading in Uptown Whitefield, Bangalore | Eyebrow
          Microblading near Whitefield
        </title>
        <meta
          name="description"
          content="Eyebrow Microblading in Uptown Whitefield, Bangalore. Whether you're looking to fill in sparse areas or completely redefine your brow shape, our skilled technicians are here to help you achieve stunning results."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eyebrow-microblading-in-uptown-whitefield-bangalore  "
        />
      </Helmet>
      <LocationServicesImg
        img={microbladingUptownImg}
        alt="microbladingUptownImg"
      />
      <InnerNavi
        link="/eyebrow-microblading"
        service="EyeBrow MicroBlading"
        currService="EyeBrow MicroBlading in Uptown"
      />
      <MicroBladingInUptownHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <MicroBladingInUptownWhyChoose />
      <MicroBladingInUptownXp />
      <MicroBladingInUptownBenefits />
      <MicroBladingInUptownBook />
            
    </div>
  );
};

export default MicroBladingInUptown;
