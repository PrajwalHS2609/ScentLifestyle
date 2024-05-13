import React from 'react'
import "./ContactPage.css"
import LocationNavBg from './../LocationPage/LocationNavBg/LocationNavBg';
import HelpNearYou from '../Help/HelpNearYou';
import LastComp from '../LastComp/LastComp';
import ContactMain from './ContactMain';
const ContactPage = () => {
  return (
    <div className='contactPageContainer'>
      <LocationNavBg/>
      <ContactMain/>
      <HelpNearYou/>
      <LastComp/>
    </div>
  )
}

export default ContactPage
