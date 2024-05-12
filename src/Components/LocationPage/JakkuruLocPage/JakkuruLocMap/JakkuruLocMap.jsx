import React from 'react'
import "./JakkuruLocMap.css"
import JakkuruLocMapHead from './JakkuruLocMapHead';
import JakkuruMap from './JakkuruMap';
const JakkuruLocMap = () => {
  return (
    <div className='jakkuruMapLocContainer'>
      <JakkuruLocMapHead/>
      <JakkuruMap/>
    </div>
  )
}

export default JakkuruLocMap
