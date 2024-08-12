import React from 'react'
import { Link } from 'react-router-dom'
import "./HairColorStreaksLandingMove.css"
const HairColorStreaksLandingMove = () => {
  return (
<div className="hairColorStreakLandingMove">
      <img
        src="https://img.freepik.com/free-photo/beautiful-model-with-long-smooth-flying-blonde-hair-isolated-dark-grey-studio-background-young-caucasian-model-with-well-kept-skin-hair-blowing-air_155003-21877.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt=""
      />
      <div className="hairColorStreakMoveContent">
        <div className="hairColorStreakMoveInnerContent">
          <h2> Make a Move</h2>
          <h3>Order your Item</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            tempore maiores atque consequatur labore laudantium quidem officia
          </p>
          <Link to={"/shop"}>
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HairColorStreaksLandingMove
