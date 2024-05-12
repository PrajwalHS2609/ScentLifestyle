import React from "react";
import "./LavellelLocMap.css";
import LavellelLocMapHead from "./LavellelLocMapHead";
import LavellelRoadMap from "./LavellelRoadMap";
const LavellelLocMap = () => {
  return (
    <div className="lavellelMapLocContainer">
      <LavellelLocMapHead />
      <LavellelRoadMap />
    </div>
  );
};

export default LavellelLocMap;
