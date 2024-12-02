import React from "react";
import "./SantaClause.css";
import santa from "./../../Images/santablackbg.webm"
const SantaClause = () => {
  return (
    <div className="santa-container">
        <video src={santa} autoPlay loop muted></video>
    </div>
  );
};

export default SantaClause;
