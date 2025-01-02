import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import MicroBladingInJakkurHead from "./MicroBladingInJakkurHead";
import MicroBladingInJakkurWhy from "./MicroBladingInJakkurWhy";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import MicroBladingInJakkurProcess from "./MicroBladingInJakkurProcess";
import MicroBladingInJakkurBenefits from "./MicroBladingInJakkurBenefits";
import MicroBladingInJakkurCustomer from "./MicroBladingInJakkurCustomer";
import MicroBladingInJakkurHow from "./MicroBladingInJakkurHow";
import MicroBladingInJakkurBook from "./MicroBladingInJakkurBook";
import MicroBladingLocationImg from "../MicroBladingLocationImg";
import microBladingImg from "./../../../../Images/SahakarNagar/Eyeborw Microblading.png";

const MicroBladingInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eyebrow Microblading in Jakkur, Bangalore | Eyebrow Microblading near
          Jakkur{" "}
        </title>
        <meta
          name="description"
          content="Eyebrow Microblading in Jakkur, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eyebrow-microblading-in-jakkur"
        />
      </Helmet>
      <MicroBladingLocationImg img={microBladingImg} src={microBladingImg} />
      <InnerNavi
        link="/nail-salon"
        service="Eyebrow Microblading "
        currService="Eyebrow Microblading  in Jakkur"
      />
      <MicroBladingInJakkurHead />
      <MicroBladingInJakkurWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <MicroBladingInJakkurProcess />
      <MicroBladingInJakkurBenefits />
      <MicroBladingInJakkurCustomer />
      <MicroBladingInJakkurHow />
      <MicroBladingInJakkurBook />
            
    </div>
  );
};

export default MicroBladingInJakkur;
