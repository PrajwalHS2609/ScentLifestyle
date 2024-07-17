import React from 'react'
import NavBg from '../NavBg/NavBg'
import MicroBladingImg from './MicroBladingImg'
import Members from '../HomePage/Members/Members'
import OurSalon from '../HomePage/OurSalon/OurSalon'
import Partners from '../HomePage/Partners/Partners'
import InstaFeed from '../HomePage/InstaFeed/InstaFeed'
import HelpNearYou from '../Help/HelpNearYou'
import TextLocReviews from '../TextLocReviews/TextLocReviews'
import ServiceWhy from '../MainServicePages/ServiceWhy/ServiceWhy'
import LastComp from '../LastComp/LastComp'
import Navi1 from '../HairServicePage/Navi1/Navi1'
import MicroBladingReadMore from './MicroBladingReadMore/MicroBladingReadMore'

const MicroBladingPage = () => {
  return (
    <div>
    {/* <Helmet>
      <meta charSet="UTF-8" />
      <title>
      EyeLashes in Bangalore | EyeLash Extension Near Me
      </title>
      <meta
        name="description"
        content="EyeLashes & Extensions in Bangalore. Discover the secret to achieving voluminous eyelashes with both permanent and temporary eyelash extensions."
      />
       <link
        rel="canonical"
        href="https://scentlifestyle.com/bridal-makeup"
      />
    </Helmet> */}
    <NavBg/>
    <MicroBladingImg/>
    <Navi1 servName="MicroBlading"/>
    <Members />
    <OurSalon />
    <Partners />
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy />
    <MicroBladingReadMore/>
    <LastComp />
  </div>
  )
}

export default MicroBladingPage
