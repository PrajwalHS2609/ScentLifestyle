import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BridalMakeUpInSahakarWhy from "./BridalMakeUpInSahakarWhy";
import BridalMakeUpInSahakarHead from "./BridalMakeUpInSahakarHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import BridalMakeUpInSahakarService from "./BridalMakeUpInSahakarService";
import BridalMakeUpInSahakarBook from "./BridalMakeUpInSahakarBook";
import BridalMakeUpInSahakarWhat from "./BridalMakeUpInSahakarWhat";
import bridalSahakarImg from "./../../../Images/SahakarNagar/Bridal Makeup.png";

const BridalMakeUpInSahakarNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup in Sahakara Nagar, Bangalore | Bridal Makeup near
          Sahakara Nagar
        </title>
        <meta
          name="description"
          content="Bridal Makeup in Sahakara Nagar, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-in-sahakara-nagar-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={bridalSahakarImg} alt={bridalSahakarImg} />
      <InnerNavi
        link="/bridal-makeup"
        service="Bridal Makeup"
        currService="Bridal Makeup in Sahakara Nagar"
      />
      <BridalMakeUpInSahakarHead />
      <BridalMakeUpInSahakarWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalMakeUpInSahakarService />
      <BridalMakeUpInSahakarBook />
      <BridalMakeUpInSahakarWhat />
            
    </div>
  );
};

export default BridalMakeUpInSahakarNagar;
