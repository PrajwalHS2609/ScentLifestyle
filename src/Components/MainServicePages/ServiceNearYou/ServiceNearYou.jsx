import React from 'react'
import ServiceNearYouHead from './ServiceNearYouHead'
import "./ServiceNearYou.css"
import ServiceNearYouPara from './ServiceNearYouPara'
import ServiceNearYouCards from './ServiceNearYouCards'
const ServiceNearYou = () => {
  return (
    <div className="serviceNearYouContainer">
      <ServiceNearYouHead/>
      <ServiceNearYouPara/>
      <ServiceNearYouCards/>
    </div>
  )
}

export default ServiceNearYou
