import React from 'react'
import "./ScentPhiloPage.css"
import ScentPhiloHead from './ScentPhiloHead'
import ScentPhiloTxt from './ScentPhiloTxt'
import PhiloNavBg from './PhiloNavBg'

const ScentPhiloPage = () => {
  return (
    <div className='scentPhiloPageContainer'>
        <PhiloNavBg/>
      <ScentPhiloHead/>
      <ScentPhiloTxt/>
    </div>
  )
}

export default ScentPhiloPage
