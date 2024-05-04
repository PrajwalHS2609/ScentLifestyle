import React from 'react'
import NavBg from './NavBg/NavBg'
import LashesImg from './LashesImg/LashesImg'
import LastComp from '../LastComp/LastComp'
import HairRead from '../HairServicePage/HairRead/HairRead'
import HelpNearYou from '../Help/HelpNearYou'
import OurSalon from '../OurSalon/OurSalon'
import Members from '../Members/Members'
import LashesServiceCardContain from './LashesServiceCard/LashesServiceCardContain'
import Navi6 from './Navi6/Navi6'

const LashesPage = () => {
  return (
    <div>
      <NavBg/>
      <LashesImg/>
      <Navi6/>
      <LashesServiceCardContain/>
      <Members />
      <OurSalon />
      <HelpNearYou />
      <HairRead />
      <LastComp/>
    </div>
  )
}

export default LashesPage
