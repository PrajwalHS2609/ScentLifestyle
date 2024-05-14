// import React from 'react'
import HelpNearYouHead from './HelpNearYouHead'
import HelpNearYouPara from './HelpNearYouPara'
import HelpNearYouCards from './HelpNearYouCards'
import './HelpNearYou.css'

const HelpNearYou = () => {
  return (
    <div className='helpNearYouContainer'>
      <HelpNearYouHead/>
      <HelpNearYouPara/>
      <HelpNearYouCards/>
    </div>
  )
}

export default HelpNearYou
