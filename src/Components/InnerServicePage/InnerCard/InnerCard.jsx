import React from 'react'
import "./InnerCard.css"
const InnerCard = (props) => {
  return (
    <div className="innerCardContainer">
    <div className="innerCardContent">
      <h1>{props.head}</h1>
      <p>{props.para}</p>
      {/* <h1>
        <span>
          Rs. {props.price} <span>Onward</span>
        </span>
      </h1> */}
    </div>
    <div className="innerCardGoto">
      <h1>BOOK NOW</h1>
    </div>
  </div>
  )
}

export default InnerCard
