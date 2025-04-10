import React from 'react'
import { Helmet } from 'react-helmet'
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import ScalpMassagerInUptownHead from './ScalpMassagerInUptownHead';
import ScalpMassagerInUptownLastContent from './ScalpMassagerInUptownLastContent';
import Members from './../../../HomePage/Members/Members';
import OurSalon from './../../../HomePage/OurSalon/OurSalon';
import Partners from './../../../HomePage/Partners/Partners';
import InstaFeed from './../../../HomePage/InstaFeed/InstaFeed';
import HelpNearYou from './../../../Help/HelpNearYou';
import TextLocReviews from './../../../TextLocReviews/TextLocReviews';
import ServiceWhy from './../../../MainServicePages/ServiceWhy/ServiceWhy';
import InnerNavi from '../../../InnerServicePage/InnerNavi/InnerNavi';
import HairSalonInLavelleImg from '../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg';

const ScalpMassagerInUptown = () => {
  return (
<div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Scalp Massagers in Whitefield | Hair Spa Price in Whitefield        </title>
        <meta
          name="description"
          content="Scalp Massagers in Whitefield, At SCENT, we provide high-quality scalp massagers that not only offer relaxation but also promote hair and scalp health."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-massagers-in-uptown-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment Uptown Whitefield " />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Scalp Massager In Uptown Whitefield"
      />
      <ScalpMassagerInUptownHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <ScalpMassagerInUptownLastContent />
    </div>
  )
}

export default ScalpMassagerInUptown
