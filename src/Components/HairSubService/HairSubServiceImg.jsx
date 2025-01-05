import React from 'react'

const HairSubServiceImg = (props) => {
  return (
    <div className="hairSubServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default HairSubServiceImg
