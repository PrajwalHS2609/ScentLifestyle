import React from 'react'
import { Helmet } from 'react-helmet'
import HairColorImg from '../../HairServicePage/HairColorPage/HairColorImg'
import InnerNavi from '../../InnerServicePage/InnerNavi/InnerNavi'
import GoldenColorNearMeHead from './GoldenColorNearMeHead';
import Members from '../../HomePage/Members/Members';
import OurSalon from '../../HomePage/OurSalon/OurSalon';
import Partners from '../../HomePage/Partners/Partners';
import InstaFeed from '../../HomePage/InstaFeed/InstaFeed';
import HelpNearYou from '../../Help/HelpNearYou';
import TextLocReviews from '../../TextLocReviews/TextLocReviews';
import ServiceWhy from '../../MainServicePages/ServiceWhy/ServiceWhy';
import GoldenColorNearMeRead from './GoldenColorNearMeRead';

const GoldenColorNearMe = () => {
  return (
    <div className="hairColorContainer">
    <Helmet>
      <meta charSet="utf-8" />
      <title>
      Golden Brown Hair Color near Me | Golden Brown Hair Color in Bangalore
      </title>
      <meta
        name="description"
        content="Golden Brown Hair Color Near Me. At SCENT, we specialize in delivering this stunning color with precision and style. Call Now!"
      />
      <link
        rel="canonical"
        href="https://scentlifestyle.com/golden-brown-hair-color-near-me"
      />
    </Helmet>
    <HairColorImg />
    <InnerNavi
      link={"/hair-salon"}
      service="Hair Service"
      currService="Highlights & Streaks"
    />
    <GoldenColorNearMeHead />
    <Members />
    <OurSalon />
    <Partners />
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy />
    <GoldenColorNearMeRead />
        
  </div>
  )
}

export default GoldenColorNearMe
