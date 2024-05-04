import React from 'react'
import "./BeardStyle.css"
import BeardStyleHead from './BeardStyleHead'
import BeardStylePara from './BeardStylePara'
import BeardStyleCard from './BeardStyleCardContain'
const BeardStyle = () => {
  return (
    <div className='beardStyleContainer'>
      <BeardStyleHead/>
      <BeardStylePara/>
      <BeardStyleCard/>
    </div>
  )
}

export default BeardStyle
