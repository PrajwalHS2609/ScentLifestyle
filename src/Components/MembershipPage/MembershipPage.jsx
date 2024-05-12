import React from 'react'
import MembershipHead from './MembershipHead'
import MembershipPara from './MembershipPara'
import "./MembershipPage.css"
import LastComp from '../LastComp/LastComp'
import MembershipNavBg from './MembershipNavBg'
import MembershipImg from './MembershipImg'
import MembershipPrice from './MembershipPrice'
import Members from '../HomePage/Members/Members'
import OurSalon from '../HomePage/OurSalon/OurSalon'
import Partners from '../HomePage/Partners/Partners'
import InstaFeed from '../HomePage/InstaFeed/InstaFeed'
const MembershipPage = () => {
  return (
    <div className='membershipPageContainer'>
        <MembershipNavBg/>
        <MembershipImg/>
      <MembershipHead/>
      <MembershipPara/>
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <MembershipPrice/>
      <LastComp/>
    </div>
  )
}

export default MembershipPage
