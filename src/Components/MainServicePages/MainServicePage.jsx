import React from 'react'
import ServicePage from './ServicePage/ServicePage'
import Navi from './Navi/Navi';
import ServiceCardContain from './ServiceCards/ServiceCardContain';
import UnisexSalon from './UnisexSalon/UnisexSalon';
import LastComp from '../LastComp/LastComp';
import ServiceNearYou from './ServiceNearYou/ServiceNearYou';

const MainServicePage = () => {
  return (
    <div>
      <ServicePage/>
      <Navi/>
      <ServiceCardContain/>
      <UnisexSalon/>
      <ServiceNearYou/>
      <LastComp/>
    </div>
  )
}

export default MainServicePage
