import React from 'react'
import "./ScentPhiloPage.css"
import ScentPhiloHead from './ScentPhiloHead'
import ScentPhiloTxt from './ScentPhiloTxt'
import PhiloNavBg from './PhiloNavBg'
import LastComp from '../LastComp/LastComp'

const ScentPhiloPage = () => {
  return (
    <div className='scentPhiloPageContainer'>
        <PhiloNavBg/>
        <div className="scentPhiloPageContent">
      <ScentPhiloHead/>
      <ScentPhiloTxt/>
      </div>
      <LastComp/>
    </div>
  )
}

export default ScentPhiloPage
