import React from 'react'
import FootMassageMain from './FootMassageMain';
import LastComp from '../../LastComp/LastComp';
import ServiceWhy from '../../MainServicePages/ServiceWhy/ServiceWhy';
import TextLocReviews from '../../TextLocReviews/TextLocReviews';
import HelpNearYou from '../../Help/HelpNearYou';
import InstaFeed from '../../HomePage/InstaFeed/InstaFeed';
import Partners from '../../HomePage/Partners/Partners';
import OurSalon from '../../HomePage/OurSalon/OurSalon';
import Members from '../../HomePage/Members/Members';
import SpaServiceCardContain from '../../Spa/SpaServiceCard/SpaServiceCardContain';
import Navi5 from '../../Spa/Navi5/Navi5';
import SpaImg from '../../Spa/SpaImg/SpaImg';
import NavBg from '../../NavBg/NavBg';
import { Helmet } from 'react-helmet';
const FootMassageNearMe = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Foot Massage Near Me |Best Foot Massage in Bangalore </title>
      <meta
        name="description on foot massage near me"
        content="Foot Massage in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
        Call Now"
      />
    </Helmet>
    <NavBg />
    <SpaImg />
    <Navi5 />
    <SpaServiceCardContain />
    <Members />
    <OurSalon />
    <Partners />
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy />
    <FootMassageMain />
    <LastComp />
  </div>
  )
}

export default FootMassageNearMe
