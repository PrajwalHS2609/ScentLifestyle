import React from 'react'
import NavBg from './NavBg/NavBg'
import LashesImg from './LashesImg/LashesImg'
import LastComp from '../LastComp/LastComp'
import HelpNearYou from '../Help/HelpNearYou'
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import LashesServiceCardContain from './LashesServiceCard/LashesServiceCardContain'
import Navi6 from './Navi6/Navi6'
import ServiceWhy from '../MainServicePages/ServiceWhy/ServiceWhy'
import LashesRead from './LashesRead/LashesRead'
import Partners from '../HomePage/Partners/Partners'
import InstaFeed from '../HomePage/InstaFeed/InstaFeed'

const LashesPage = () => {
  return (
    <div>
      <NavBg/>
      <LashesImg/>
      <Navi6/>
      <LashesServiceCardContain/>
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <HelpNearYou />
      <ServiceWhy/>
      <LashesRead/>
      <LastComp/>
    </div>
  )
}

export default LashesPage
