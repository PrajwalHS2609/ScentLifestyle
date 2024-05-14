import React from 'react'
import "./ScentPhiloPage.css"
import ScentPhiloHead from './ScentPhiloHead'
import ScentPhiloTxt from './ScentPhiloTxt'
import LastComp from '../LastComp/LastComp'
import NavBg from '../NavBg/NavBg'

const ScentPhiloPage = () => {
  return (
    <div className='scentPhiloPageContainer'>
        <NavBg/>
        <div className="scentPhiloPageContent">
      <ScentPhiloHead/>
      <ScentPhiloTxt/>
      </div>
      <LastComp/>
    </div>
  )
}

export default ScentPhiloPage
