import React from 'react'
import "./Nested.css"
import { Outlet } from 'react-router-dom'
const NestedDisplay = () => {
  return (
    <div className='nestedDisplay'>
    <Outlet/>
    </div>
  )
}

export default NestedDisplay
