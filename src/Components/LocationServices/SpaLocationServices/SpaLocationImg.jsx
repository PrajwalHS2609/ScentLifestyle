import React from 'react'

const SpaLocationImg = (props) => {
  return (
    <div className="spaServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default SpaLocationImg
