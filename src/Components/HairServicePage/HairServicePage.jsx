import React from 'react'
import Navi1 from './Navi1/Navi1'
import HairServiceCardContain from './HairServiceCard/HairServiceCardContain'
import HairSalon from './HairSalon/HairSalon'
import LastComp from '../LastComp/LastComp'
import HairServiceImg from './HairServiceImg/HairServiceImg'
import NavBg2 from './NavBg2/NavBg2'
import HairNearYou from './NearYou/HairNearYou'
import HairWhy from './HairWhy/HairWhy'
import HairRead from './HairRead/HairRead'
const HairServicePage = () => {
  return (
    <div className='hairMain'>
      <NavBg2/>
      <HairServiceImg/>
      <Navi1/>
      <HairServiceCardContain/>
      <HairSalon/>
      <HairNearYou/>
      <HairWhy/>
      <HairRead/>
      <LastComp/>
    </div>
  )
}

export default HairServicePage
