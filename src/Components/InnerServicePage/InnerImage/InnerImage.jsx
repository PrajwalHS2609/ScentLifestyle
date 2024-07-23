import React from 'react'
import "./InnerImage.css"
const InnerImage = (props) => {
  return (
    <div className="innerImgContainer">
    <div className="innerImgCover">
      <img src={props.innerImg} alt="" />
      <div className="innerCover">
        <div className="innerOverCoverTxt">
          <h2>{props.innerImgHead}</h2>
          <div className="innerOverUnderline"></div>
          <pre>{props.innerImgTxt} </pre>
          <p>
           {props.innerImgTxt}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InnerImage
