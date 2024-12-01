import React from "react";
import "./SantaClause.css";
import santa from "./../../Images/santaclause riding.mp4"
const SantaClause = () => {
  return (
    <div className="santa-container">
      <marquee behavior="" direction="right">
        <video src={santa} autoPlay loop muted></video>
      </marquee>
    </div>
  );
};

export default SantaClause;
