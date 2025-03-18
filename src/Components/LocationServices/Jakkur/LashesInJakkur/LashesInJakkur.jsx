import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import LashesInJakkurHead from './LashesInJakkurHead';
import LashesInJakkurWhy from "./LashesInJakkurWhy";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import LashesInJakkurExplore from './LashesInJakkurExplore';
import LashesInJakkurBenefits from './LashesInJakkurBenefits';
import LashesInJakkurCustomer from './LashesInJakkurCustomer';
import LashesInJakkurMaintain from './LashesInJakkurMaintain';
import LashesInJakkurBook from './LashesInJakkurBook';
import lashesJakkurImg from "./../../../../Images/SahakarNagar/Eye Lashes.png";
import LocationServicesImg from "../../LocationServicesImg";

const LashesInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Lashes in Jakkur, Bangalore | Eye Lash Extensions near Jakkur{" "}
        </title>
        <meta
          name="description"
          content="Eye Lashes in Jakkur, Bangalore. We offer a range of lash treatments tailored to give you the perfect look, whether it's subtle enhancement or full-on drama."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes-in-jakkur"
        />
      </Helmet>
      <LocationServicesImg img={lashesJakkurImg} alt="lashesJakkurImg" />
      <InnerNavi
        link="/eye-lashes"
        service="Eye Lashes"
        currService="Eye Lashes in Jakkur"
      />
      <LashesInJakkurHead/>
      <LashesInJakkurWhy/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesInJakkurExplore />
      <LashesInJakkurBenefits />
      <LashesInJakkurCustomer />
      <LashesInJakkurMaintain />
      <LashesInJakkurBook/>
            
    </div>
  );
};

export default LashesInJakkur;
