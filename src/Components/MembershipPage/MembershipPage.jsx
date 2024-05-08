import React from 'react'
import MembershipHead from './MembershipHead'
import MembershipPara from './MembershipPara'
import "./MembershipPage.css"
import LastComp from '../LastComp/LastComp'
import MembershipNavBg from './MembershipNavBg'
import MembershipImg from './MembershipImg'
import MembershipPrice from './MembershipPrice'
const MembershipPage = () => {
  return (
    <div className='membershipPageContainer'>
        <MembershipNavBg/>
        <MembershipImg/>
      <MembershipHead/>
      <MembershipPara/>
      <MembershipPrice/>
      <LastComp/>
    </div>
  )
}

export default MembershipPage
