import React from 'react'
import { Helmet } from 'react-helmet'
import NavBg from '../../../NavBg/NavBg'
import WhatsApp from '../../../HomePage/WhatsApp/WhatsApp'
import LastComp from '../../../LastComp/LastComp'
import InnerNavi from '../../../InnerServicePage/InnerNavi/InnerNavi'
import PediAndManicureImg from './PediAndManicure/PediAndManicureImg/PediAndManicureImg'
import PediAndManicureHead from './PediAndManicure/PediAndManicureHead/PediAndManicureHead'
import PediAndManicureBenefits from './PediAndManicure/PediAndManicureBenefits/PediAndManicureBenefits'
import PediAndManicureWhat from './PediAndManicure/PediAndManicureWhat/PediAndManicureWhat'

const PediAndManicure = () => {
  return (
    <div className="">
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Exploring the Benefits of Professional Pedicures and Manicures  </title>
      <meta
        name="description"
        content="Exploring the Benefits of Professional Pedicures and Manicures"
      />
      <link
        rel="canonical"
        href="https://scentlifestyle.com/why-you-should-consider-keratin-hair-treatment"
      />
    </Helmet>
    <NavBg />
    <div className="hairTrimContent">
        <PediAndManicureImg/>
      <InnerNavi
        link="/blog"
        service="Blog"
        currService="Pedicure & Manicure"
      />
    <PediAndManicureHead/>
    <PediAndManicureWhat/>
    <PediAndManicureBenefits/>
    </div>
    <WhatsApp />
    <LastComp />
  </div>
  )
}

export default PediAndManicure
