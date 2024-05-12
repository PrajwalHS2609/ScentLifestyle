import React from 'react'
import JakkuruLocServiceHead from './JakkuruLocServiceHead'
import JakkuruLocMainService from './JakkuruLocMainService'
import "./JakkuruLocService.css"
const JakkuruLocService = () => {
  return (
    <div className='jakkuruLocServiceContainer'>
    <JakkuruLocServiceHead/>
    <JakkuruLocMainService/>
  </div>
  )
}

export default JakkuruLocService
