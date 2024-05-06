import React from 'react'
import AboutImg from './AboutImg'
import AboutHead from './AboutHead'
import AboutTxt from './AboutTxt'
import "./AboutPage.css"
import AboutNavBg from './AboutNavBg'
const AboutPage = () => {
  return (
    <div className='aboutContainer'>
      <AboutNavBg/>
      <AboutImg/>
      <AboutHead/>
      <AboutTxt/>
    </div>
  )
}

export default AboutPage
