import React from 'react'
import "./HairNearYou.css"
import HairNearYouHead from './HairNearYouHead'
import HairNearYouPara from './HairNearYouPara'
import HairNearYouCards from './HairNearYouCards'
const HairNearYou = () => {
  return (
    <div className="hairNearYouContainer">
      <HairNearYouHead/>
      <HairNearYouPara/>
      <HairNearYouCards/>
    </div>
  )
}

export default HairNearYou
