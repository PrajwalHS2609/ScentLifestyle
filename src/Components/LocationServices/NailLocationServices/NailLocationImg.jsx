import React from 'react'

const NailLocationImg = (props) => {
  return (
    <div className="nailServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  )
}

export default NailLocationImg
