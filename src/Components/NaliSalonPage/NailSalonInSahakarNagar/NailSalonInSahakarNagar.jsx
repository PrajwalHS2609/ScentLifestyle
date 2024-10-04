import React from 'react'
import { Helmet } from 'react-helmet'
import nailMeadowsImg from "./../../../Images/JP_Nagar/Nail.png";
import NailSalonInSahakarNagarHead from './NailSalonInSahakarNagarHead';
import NailSalonInSahakarNagarWhy from './NailSalonInSahakarNagarWhy';
import Members from '../../HomePage/Members/Members';
import OurSalon from '../../HomePage/OurSalon/OurSalon';
import Partners from '../../HomePage/Partners/Partners';
import InstaFeed from '../../HomePage/InstaFeed/InstaFeed';
import HelpNearYou from '../../Help/HelpNearYou';
import TextLocReviews from '../../TextLocReviews/TextLocReviews';
import ServiceWhy from '../../MainServicePages/ServiceWhy/ServiceWhy';
import NailSalonInSahakarNagarMaincure from './NailSalonInSahakarNagarMaincure';
import NailSalonInSahakarNagarArt from './NailSalonInSahakarNagarArt';
import NailSalonInSahakarNagarExtension from './NailSalonInSahakarNagarExtension';
import NailSalonInSahakarNagarHealth from './NailSalonInSahakarNagarHealth';
import WhatsApp from '../../HomePage/WhatsApp/WhatsApp';
import LastComp from '../../LastComp/LastComp';
import InnerNavi from '../../InnerServicePage/InnerNavi/InnerNavi';
import HairSalonInMeadowsImg from '../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg';

const NailSalonInSahakarNagar = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Hair Salon in Sahakara Nagar, Bangalore | Hair Salon near Sahakara
        Nagar{" "}
      </title>
      <meta
        name="description"
        content="Hair Salon in Sahakara Nagar, Bangalore. Whether you're looking for a fresh haircut, a complete makeover, or simply a relaxing day of pampering. Call Now!"
      />
      <link
        rel="canonical"
        href="https://scentlifestyle.com/hair-salon-in-sahakara-nagar-bangalore"
      />
    </Helmet>
    <HairSalonInMeadowsImg img={nailMeadowsImg} alt={nailMeadowsImg} />
    <InnerNavi
      link="/nail-salon"
      service="Nail Salon"
      currService="Nail salon in Sahakara Nagar"
    />
    <NailSalonInSahakarNagarHead />
    <NailSalonInSahakarNagarWhy />
    <Members />
    <OurSalon />
    <Partners />
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy />
    <NailSalonInSahakarNagarMaincure />
    <NailSalonInSahakarNagarArt />
    <NailSalonInSahakarNagarExtension />
    <NailSalonInSahakarNagarHealth/>
    <WhatsApp />
    <LastComp />
  </div>
  )
}

export default NailSalonInSahakarNagar
