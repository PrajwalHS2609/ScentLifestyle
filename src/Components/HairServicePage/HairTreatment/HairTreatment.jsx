import React from 'react'
import NavBg from '../../NavBg/NavBg'
import InnerServiceTxt from '../../InnerServicePage/InnerServiceTxt/InnerServiceTxt'
import InnerNavi from '../../InnerServicePage/InnerNavi/InnerNavi'

const HairTreatment = () => {
  return (
    <div className="hairTreatmentContainer">
    <NavBg />
    <div className="hairTreatmentContent">
      <InnerServiceTxt />
      <InnerNavi />
      <div className="hairTreatmentCardContainer">
          <InnerCard/>
      </div>
      <InnerServiceTxt/>
      
    </div>
  </div>
  )
}

export default HairTreatment
