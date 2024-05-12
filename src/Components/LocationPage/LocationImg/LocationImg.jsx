import React from 'react'
import "./LocationImg.css"
const LocationImg = (props) => {
  return (
    <div className="locationImgContainer">
      <img
        src={props.img}
        alt=""
      />
    </div>
  )
}

export default LocationImg
