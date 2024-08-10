import React from 'react'
import "./HairTreatmentLandingPage.css"
import HairTreatmentLandingHead from './HairTreatmentLandingHead/HairTreatmentLandingHead'
import HairTreatmentLandingCollection from './HairTreatmentLandingCollection/HairTreatmentLandingCollection'
import HairTreatmentLandingCare from './HairTreatmentLandingCare/HairTreatmentLandingCare'
import HairTreatmentLandingMove from './HairTreatmentLandingMove/HairTreatmentLandingMove'
import HairTreatmentLandingProgram from './HairTreatmentLandingProgram/HairTreatmentLandingProgram'
import HairTreatmentLandingMission from './HairTreatmentLandingMission/HairTreatmentLandingMission'

const HairTreatmentLandingPage = () => {
  return (
    <div className='hairTreatmentLandingPage'>
      <HairTreatmentLandingHead/> 
      <HairTreatmentLandingCollection/>
      {/* <HairTreatmentLandingCare/> */}
      <HairTreatmentLandingMove/>
      <HairTreatmentLandingMission/>
      <HairTreatmentLandingProgram/>
    </div>
  )
}

export default HairTreatmentLandingPage
