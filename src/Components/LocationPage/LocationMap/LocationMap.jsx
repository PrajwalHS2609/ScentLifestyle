import React from "react";
import "./LocationMap.css";
const LocationMap = (props) => {
  return (
    <div className="locationMapContainer">
      <div className="locationMapHeadContainer">
        <h1>To Reach ScentLifestyle  in {props.location}</h1>
      </div>
      <div className="locationMap">{props.map}</div>
    </div>
  );
};

export default LocationMap;
