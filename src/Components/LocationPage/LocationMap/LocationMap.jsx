import React from "react";
import "./LocationMap.css";
const LocationMap = (props) => {
  return (
    <div className="locationMapContainer">
      <div className="locationMap">{props.map}</div>
    </div>
  );
};

export default LocationMap;
