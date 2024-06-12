import React from 'react'
import "./Navbar2.css"
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div>
      <div  className="logo">
    <Link to={"/"}> <img src="https://website2.tryseoservices.com/wp-content/uploads/2024/03/scent-rectangle-noised-100x-1.png" alt="logo" /></Link>

      </div>
    </div>
  )
}

export default Logo
