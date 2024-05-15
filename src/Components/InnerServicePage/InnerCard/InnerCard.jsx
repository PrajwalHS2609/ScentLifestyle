import React from 'react'
import "./InnerCard.css"
const InnerCard = (props) => {
  return (
    <div className="innerHairCardContainer">
    <div className="innerHairCardContent">
      <h1>{props.head}</h1>
      <p>{props.para}</p>
      <h1>
        <span>
          Rs. {props.price} <span>Onward</span>
        </span>
      </h1>
    </div>
    <div className="innerHairCardGoto">
      <h1>BOOK NOW</h1>
    </div>
  </div>
  )
}

export default InnerCard
