import React from "react";
import { Helmet } from "react-helmet";
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
import EyeProtectFacialHead from "./EyeProtectFacialHead";
import EyeProtectFacialBook from "./EyeProtectFacialBook";
import EyeProtectFacialCustomer from "./EyeProtectFacialCustomer";
import EyeProtectFacialBenefits from "./EyeProtectFacialBenefits";
import EyeProtectFacialWhy from "./EyeProtectFacialWhy";
import EyeProtectFacialWhat from "./EyeProtectFacialWhat";
import EyeProtectFacialImg from "./EyeProtectFacialImg";

const EyeProtectFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Protection Facial Services in Bangalore | Best Facials Salon Near
          Me
        </title>
        <meta
          name="description"
          content="Eye Protection Facial Services in Bangalore. Designed to address the unique needs of the skin around the eyes, our specialized facials offer a luxurious and effective solution for those seeking to rejuvenate and protect this sensitive area."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-protection-facial-services"
        />
      </Helmet>
      <NavBg />
      <EyeProtectFacialImg/>
      <EyeProtectFacialHead />
      <EyeProtectFacialBenefits />
      <EyeProtectFacialWhat />
      <EyeProtectFacialWhy />
      <EyeProtectFacialCustomer />
      <EyeProtectFacialBook />
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

export default EyeProtectFacial;
