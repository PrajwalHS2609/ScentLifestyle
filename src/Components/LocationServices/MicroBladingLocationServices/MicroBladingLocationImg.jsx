import React from "react";
import "./MicroBladingLocation.css";
const MicroBladingLocationImg = (props) => {
  return (
    <div className="microBladingServiceImg">
      <img src={props.img} alt={props.alt} loading="lazy" />
    </div>
  );
};

export default MicroBladingLocationImg;
