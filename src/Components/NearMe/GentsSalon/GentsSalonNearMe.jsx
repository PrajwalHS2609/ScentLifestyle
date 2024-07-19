import React from 'react'
import { Helmet } from 'react-helmet'
import NavBg from '../../NavBg/NavBg'
import ServicePage from '../../MainServicePages/ServicePage/ServicePage'
import Navi from '../../MainServicePages/Navi/Navi'
import ServiceCardContain from '../../MainServicePages/ServiceCards/ServiceCardContain'
import UnisexSalon from '../../MainServicePages/UnisexSalon/UnisexSalon'
import Members from '../../HomePage/Members/Members'
import OurSalon from '../../HomePage/OurSalon/OurSalon'
import Partners from '../../HomePage/Partners/Partners'
import InstaFeed from '../../HomePage/InstaFeed/InstaFeed'
import ServiceWhy from '../../MainServicePages/ServiceWhy/ServiceWhy'
import TextLocReviews from '../../TextLocReviews/TextLocReviews'
import HelpNearYou from '../../Help/HelpNearYou'
import LastComp from '../../LastComp/LastComp'
import GentsSalonMain from './GentsSalonMain'
import WhatsApp from '../../HomePage/WhatsApp/WhatsApp'

const GentsSalonNearMe = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gents Salon Near Me |Best Gents Salon in Bangalore </title>
      <meta
        name="description on gents salon"
        content="Gents Salon in Bangalore Near Sahakar Nagar, Jakkur,Jp Nagar, Lavelle Road,UpTown-Whitefield and Meadows-Whitefield
        Call Now"
      />
    </Helmet>
    <NavBg />
    <ServicePage />
    <Navi />
    <ServiceCardContain />
    <UnisexSalon />
    <Members />
    <OurSalon />
    <Partners/>
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy />
    <GentsSalonMain />
    <WhatsApp/>
    <LastComp />

  </div>
  )
}

export default GentsSalonNearMe
