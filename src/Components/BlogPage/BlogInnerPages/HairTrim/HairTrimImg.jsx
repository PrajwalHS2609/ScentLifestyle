import React from 'react'
import "./HairTrim.css"
import  hairTrim from "./../.././../../Images/Blog/Does Trimming Hair Make It Grow Faster.png"
const HairTrimImg = () => {
  return (
    <div className='blogImg-content'>
      <img src={hairTrim} alt="hairTrim" loading='lazy'/>
    </div>
  )
}

export default HairTrimImg
