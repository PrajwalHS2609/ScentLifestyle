import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./OlaplexLandingWork.css"
const OlaplexLandingWorkCard = () => {
  return (
    <div className="olaplexLandingWorkCard">
    <img
      src="https://img.freepik.com/free-photo/close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa_23-2147939902.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
      alt=""
    />
    <div className="olaplexLandingWorkCardCover">
      <h3>Paul Mitchell Hair Show</h3>
      <div className="olaplexLandingWorkCardUnderline"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
        incidunt ipsum inventore autem commodi perspiciatis possimus,
        consequuntur facere, dolor ducimus molestias accusantium. Laborum,
        nobis? Officia similique itaque explicabo ipsa.
      </p>
      <div className="olaplexLandingWorkCardArrow">
        <Link to={"/"}>
          {" "}
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="botoxArrow"
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default OlaplexLandingWorkCard
