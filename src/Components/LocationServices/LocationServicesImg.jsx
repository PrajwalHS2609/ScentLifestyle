import React from 'react'
import "./LocationServicesImg.css"
const LocationServicesImg = (props) => {
  return (
    <div className="locationServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default LocationServicesImg
