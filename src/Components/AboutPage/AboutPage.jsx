import React from 'react'
import AboutImg from './AboutImg'
import AboutHead from './AboutHead'
import AboutTxt from './AboutTxt'
import "./AboutPage.css"
import AboutNavBg from './AboutNavBg'
import LastComp from '../LastComp/LastComp'
const AboutPage = () => {
  return (
    <div className='aboutContainer'>
      <AboutNavBg/>
      <AboutImg/>
      <AboutHead/>
      <AboutTxt/>
      <LastComp/>
    </div>
  )
}

export default AboutPage
