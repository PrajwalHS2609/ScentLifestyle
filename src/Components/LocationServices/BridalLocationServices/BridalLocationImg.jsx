import React from 'react'

const BridalLocationImg = (props) => {
  return (
    <div className="bridalServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default BridalLocationImg
