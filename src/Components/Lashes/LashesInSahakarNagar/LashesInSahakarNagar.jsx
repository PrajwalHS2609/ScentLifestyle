import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import LashesInSahakarNagarHead from "./LashesInSahakarNagarHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LashesInSahakarNagarWhy from "./LashesInSahakarNagarWhy";
import LashesInSahakarNagarBenefit from "./LashesInSahakarNagarBenefit";
import LashesInSahakarNagarBook from "./LashesInSahakarNagarBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import lashesSahakarImg from "./../../../Images/JP_Nagar/Eye Lashes.png";
import LashesInSahakarNagarWhyChoose from "./LashesInSahakarNagarWhyChoose";

const LashesInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Lashes in Sahakara Nagar, Bangalore | Eye Lash Extensions near
          Sahakara Nagar
        </title>
        <meta
          name="description"
          content="Eye Lashes in Sahakara Nagar, Bangalore. We offer a range of lash treatments tailored to give you the perfect look, whether it's subtle enhancement or full-on drama."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes-in-sahakara-nagar-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={lashesSahakarImg} alt={lashesSahakarImg} />
      <InnerNavi
        link="/eye-lashes"
        service="Eye Lashes"
        currService="Eye Lashes in Sahakar Nagar"
      />
      <LashesInSahakarNagarHead />
      <LashesInSahakarNagarWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesInSahakarNagarBenefit />
      <LashesInSahakarNagarWhy />
      <LashesInSahakarNagarBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default LashesInSahakarNagar;