import React from "react";
import { Helmet } from "react-helmet";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "../../../Beauty/BeautyRead/BeautyRead";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import FootSpaHead from "./FootSpaHead";
import FootSpaBenefits from "./FootSpaBenefits";
import FootSpaWhy from "./FootSpaWhy";
import NavBg from "../../../NavBg/NavBg";
import FootSpaXp from "./FootSpaXp";
import FootSpaWellness from "./FootSpaWellness";
import FootSpaCustomer from "./FootSpaCustomer";
const FootSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Foot Massage in Bangalore | Best Foot Massage Salon Near Me
        </title>
        <meta
          name="description"
          content="Foot Massage in Bangalore. We provide an exquisite range of foot massage services that promise to leave you feeling refreshed and revitalized."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/foot-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      {/* <FaceImg /> */}
      <InnerNavi link="/spa" service="Spa" currService="Foot Massage" />
      <FootSpaHead />
      <FootSpaXp/>
      <FootSpaBenefits />
      <FootSpaWhy />
      <FootSpaWellness/>
      <FootSpaCustomer/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default FootSpa;
