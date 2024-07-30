import React from 'react'
import "./FaceWhy.css"
import checked from "./../../../../Images/checked.png";

const FaceWhy = () => {
  return (
    <div className='faceWhyContainer'>
       <h5></h5>
      <p>
       
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Technicians:{" "}
          </span>
          <p>
            {" "}
            Our team of experienced nail technicians is trained in the latest
            techniques and trends, ensuring you receive the best service
            possible.
          </p>
        </li>
        </ul>
    </div>
  )
}

export default FaceWhy
