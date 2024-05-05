import React from 'react'
import SahakarLocImg from './SahakarLocImg/SahakarLocImg'
import SahakarLocHead from './SahakarLocHead/SahakarLocHead'
import SahakarLocService from './SahakarLocService/SahakarLocService'
import "./SahakarLocPage.css"
const SahakarLocPage = () => {
  return (
    <div className='sahakarLocPageContainer'>
      <SahakarLocImg/>
      <div className='sahakarLocPageContent'>
      <SahakarLocHead/>
      <SahakarLocService/>
      </div>
    </div>
  )
}

export default SahakarLocPage
