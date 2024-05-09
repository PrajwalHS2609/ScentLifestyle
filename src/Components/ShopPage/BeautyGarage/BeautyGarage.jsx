import React from 'react'
import "./BeautyGarage.css"
import BeautyGarageHead from './BeautyGarageHead'
import BeautyGarageCardContain from './BeautyGarageCardContain'

const BeautyGarage = () => {
  return (
    <div className='beautyGarageContainer'>
      <BeautyGarageHead/>
      <BeautyGarageCardContain/>
    </div>
  )
}

export default BeautyGarage
