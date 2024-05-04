import React from 'react'
import HairSalonHead from './HairSalonHead'
import HairSalonPara from './HairSalonPara'
import "./HairSalon.css"
const HairSalon = () => {
  return (
    <div className='hairSalonContainer'>
      <HairSalonHead/>
      <HairSalonPara/>
    </div>
  )
}

export default HairSalon
