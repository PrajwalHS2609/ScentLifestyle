import React from 'react'

const LashesLocationImg = (props) => {
  return (
    <div className="lashesServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default LashesLocationImg
