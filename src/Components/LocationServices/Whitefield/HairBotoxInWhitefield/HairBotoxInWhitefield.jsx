import React from 'react'
import { Helmet } from 'react-helmet'
import HairSalonInLavelleImg from '../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg'
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";
import InnerNavi from '../../../InnerServicePage/InnerNavi/InnerNavi';
import HairBotoxInWhitefieldHead from './HairBotoxInWhitefieldHead';
import Members from '../../../HomePage/Members/Members';
import OurSalon from '../../../HomePage/OurSalon/OurSalon';
import Partners from '../../../HomePage/Partners/Partners';
import InstaFeed from '../../../HomePage/InstaFeed/InstaFeed';
import HelpNearYou from '../../../Help/HelpNearYou';
import TextLocReviews from '../../../TextLocReviews/TextLocReviews';
import ServiceWhy from '../../../MainServicePages/ServiceWhy/ServiceWhy';
import HairBotoxInWhitefieldWhyChoose from './HairBotoxInWhitefieldWhyChoose';
import HairBotoxInWhitefieldHow from './HairBotoxInWhitefieldHow';
import HairBotoxInWhitefieldWho from './HairBotoxInWhitefieldWho';
import HairBotoxInWhitefieldVerses from './HairBotoxInWhitefieldVerses';
import HairBotoxInWhitefieldMaintain from './HairBotoxInWhitefieldMaintain';
import HairBotoxInWhitefieldBook from './HairBotoxInWhitefieldBook';
import HairBotoxInWhitefieldWhy from './HairBotoxInWhitefieldWhy';
const HairBotoxInWhitefield = () => {
  return (
<div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Hair Botox Treatment in Whitefield | Hair Treatment Salon near Whitefield
        </title>
        <meta
          name="description"
          content=" Hair Botox Treatment in Whitefield, Bangalore is the perfect solution to bring back the shine, smoothness, and strength your hair deserves. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatment-in-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox in Whitefield"
      />
      <HairBotoxInWhitefieldHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxInWhitefieldWhyChoose />
      <HairBotoxInWhitefieldHow />
      <HairBotoxInWhitefieldWho />
      <HairBotoxInWhitefieldVerses />
      <HairBotoxInWhitefieldMaintain />
      <HairBotoxInWhitefieldWhy />
      <HairBotoxInWhitefieldBook />
    </div>
  )
}

export default HairBotoxInWhitefield
