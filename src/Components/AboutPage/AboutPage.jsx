import React from 'react'
import AboutImg from './AboutImg'
import AboutTxt from './AboutTxt'
import "./AboutPage.css"
import AboutNavBg from './AboutNavBg'
import LastComp from '../LastComp/LastComp'
import AboutPageHead from './AboutPageHead'
const AboutPage = () => {
  return (
    <div className='aboutPgContainer'>
      <AboutNavBg/>
      <AboutImg/>
      <AboutPageHead/>
      <AboutTxt/>
      <LastComp/>
    </div>
  )
}

export default AboutPage
