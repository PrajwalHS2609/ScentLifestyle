import React from 'react'
import { Helmet } from 'react-helmet'
import HairSalonInMeadowsImg from '../../LocationServices/HairLocationServices/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg'
import hairMaskImg from "./../../../Images/SahakarNagar/Hair.png";
import InnerNavi from '../../InnerServicePage/InnerNavi/InnerNavi';
import HairMaskHead from './HairMaskHead';
import HairMaskBenefits from './HairMaskBenefits';
import HairMaskWhyChoose from './HairMaskWhyChoose';
import HairMaskTypes from './HairMaskTypes';
import HairMaskHow from './HairMaskHow';
import HairMaskTestmonial from './HairMaskTestmonial';
import HairMaskTips from './HairMaskTips';
import HairMaskBook from './HairMaskBook';
import Members from '../../HomePage/Members/Members';
import OurSalon from '../../HomePage/OurSalon/OurSalon';
import Partners from '../../HomePage/Partners/Partners';
import InstaFeed from '../../HomePage/InstaFeed/InstaFeed';
import HelpNearYou from '../../Help/HelpNearYou';
import TextLocReviews from '../../TextLocReviews/TextLocReviews';
import ServiceWhy from '../../MainServicePages/ServiceWhy/ServiceWhy';

const HairMask = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
      Hair Masks in Bangalore | Hair Treatments in Bangalore
      </title>
      <meta
        name="description"
        content="Hair Masks in Bangalore. One of the most effective ways to restore your hair’s health and vitality is through the use of hair masks."
      />
      <link
        rel="canonical"
        href="https://scentlifestyle.com/hair-masks-in-bangalore"
      />
    </Helmet>
    <HairSalonInMeadowsImg img={hairMaskImg} alt="hairMaskImg" />{" "}
    <InnerNavi
      link="/hair-salon"
      service="Hair Salon"
      currService="Hair Mask"
    />
    <HairMaskHead />
    <Members />
    <OurSalon />
    <Partners />
    <InstaFeed />
    <HelpNearYou />
    <TextLocReviews />
    <ServiceWhy  />
    <HairMaskBenefits />
    <HairMaskWhyChoose />
    <HairMaskTypes />
    <HairMaskHow />
    <HairMaskTestmonial />
    <HairMaskTips />
    <HairMaskBook/>
  </div>
  )
}

export default HairMask
