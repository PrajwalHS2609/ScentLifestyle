import React from 'react'
import "./NailSalonCard.css"

const NailSalonCard = (props) => {
  return (
    <div className='nailSalonCardContainer'>
           <div className="nailSalonCardContent">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
        <h1>
          <span>
            Rs. {props.price} <span>Onward</span>
          </span>
        </h1>
      </div>
      <div className="nailSalonGoto">
        <h1>BOOK NOW</h1>
      </div>
    </div>
  )
}

export default NailSalonCard
