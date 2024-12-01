import React from "react";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import LashesExtensionHead from "./LashesExtensionHead";
import LashesExtensionXp from "./LashesExtensionXp";
import LashesExtensionWhy from "./LashesExtensionWhy";
import LashesExtensionCustomer from "./LashesExtensionCustomer";
import LashesExtensionBook from "./LashesExtensionBook";
import Partners from "../../../HomePage/Partners/Partners";
import LashesExtensionBenefits from "./LashesExtensionBenefits";
import LashesExtensionImg from "./LashesExtensionImg";

const LashesExtension = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          Eye Lash Extensions in Bangalore | Eye Lash Extensions Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Eye Lash Extensions in Bangalore. SCENT is the perfect choice for those looking to elevate their look with fuller & longer lashes. Book an Appointment Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lash-extensions-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <LashesExtensionImg />
      <InnerNavi
        link="/spa"
        service="Eye Lashes"
        currService="Eye Lashes Extension"
      />
      <LashesExtensionHead />
      <LashesExtensionXp />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesExtensionBenefits />
      <LashesExtensionWhy />
      <LashesExtensionCustomer />
      <LashesExtensionBook />
            
    </div>
  );
};

export default LashesExtension;
