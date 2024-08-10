import React from 'react'
import "./HairTreatmentLandingProgram.css"
import HairTreatmentHeadProgram from './HairTreatmentHeadProgram'
import HairTreatmentMainProgram from './HairTreatmentMainProgram'

const HairTreatmentLandingProgram = () => {
  return (
    <div className='hairTreatmentLandingProgram'>
      <HairTreatmentHeadProgram/>
      <HairTreatmentMainProgram/>
    </div>
  )
}

export default HairTreatmentLandingProgram
