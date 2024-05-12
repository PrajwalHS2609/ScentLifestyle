import React from 'react'
import "./UptownLocMap.css"
import UptownLocMapHead from './UptownLocMapHead'
import UptownMap from './UptownMap';

const UptownLocMap = () => {
  return (
    <div className='uptownMapLocContainer'>
        <UptownLocMapHead/>
      <UptownMap/>
    </div>
  )
}

export default UptownLocMap
