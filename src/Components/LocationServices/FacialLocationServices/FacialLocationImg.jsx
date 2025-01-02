import React from 'react'

const FacialLocationImg = (props) => {
  return (
    <div className="facialServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default FacialLocationImg
