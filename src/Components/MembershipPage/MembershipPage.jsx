import React from 'react'
import MembershipHead from './MembershipHead'
import MembershipPara from './MembershipPara'
import "./MembershipPage.css"
import LastComp from '../LastComp/LastComp'
const MembershipPage = () => {
  return (
    <div className='membershipPageContainer'>
      <MembershipHead/>
      <MembershipPara/>
      <LastComp/>
    </div>
  )
}

export default MembershipPage
