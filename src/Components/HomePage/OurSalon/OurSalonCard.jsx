import React from 'react'
import "./OurSalon.css";

const OurSalonCard = (props) => {
  return (
        <div className="salonItem">
          <p>{props.txt}</p>
        </div>
  )
}

export default OurSalonCard
