import React from 'react'
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from './../../../HomePage/Members/Members';
import OurSalon from './../../../HomePage/OurSalon/OurSalon';
import Partners from './../../../HomePage/Partners/Partners';
import HelpNearYou from './../../../Help/HelpNearYou';
import TextLocReviews from './../../../TextLocReviews/TextLocReviews';
import ServiceWhy from './../../../MainServicePages/ServiceWhy/ServiceWhy';
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import HairSmoothInWhitefieldHead from './HairSmoothInWhitefieldHead';
import HairSmoothInWhitefieldFooter from './HairSmoothInWhitefieldFooter';
const HairSmoothInWhitefield = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
      Scalp Massagers in Jakkur | Hair Spa Price in Jakkur        </title>
      <meta
        name="description"
        content="Scalp Massagers in Jakkur, At SCENT, we provide high-quality scalp massagers that not only offer relaxation but also promote hair and scalp health."
      />
      <link
        rel="canonical"
        href="https://scentlifestyle.com/scalp-massagers-in-jakkur"
      />
    </Helmet>
    <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
    <InnerNavi
      link="/hair-salon"
      service="Hair Salon"
      currService="Hair Smoothening in Whitefield"
    />
    <HairSmoothInWhitefieldHead />
    <Members />
    <OurSalon />
    <Partners />
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy />
    <HairSmoothInWhitefieldFooter />
  </div>
  )
}

export default HairSmoothInWhitefield
