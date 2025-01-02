import React from 'react'

const BeautyLocationImg = (props) => {
  return (
    <div className="beautyServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default BeautyLocationImg
