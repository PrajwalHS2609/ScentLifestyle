import React from 'react'
import "./JpLocMap.css"
import JpLocMapHead from './JpLocMapHead'
import JpNagarMap from './JpNagarMap'

const JpLocMap = () => {
  return (
    <div className='jpLocMapContainer'>
      <JpLocMapHead/>
      <JpNagarMap/>
    </div>
  )
}

export default JpLocMap
