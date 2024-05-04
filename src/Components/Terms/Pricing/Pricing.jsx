import React from 'react'
import PricingHead from './PricingHead'
import PricingPara from './PricingPara'
import "./Pricing.css"
const Pricing = () => {
  return (
    <div className='pricingContainer'>
      <PricingHead/>
      <PricingPara/>
    </div>
  )
}

export default Pricing
