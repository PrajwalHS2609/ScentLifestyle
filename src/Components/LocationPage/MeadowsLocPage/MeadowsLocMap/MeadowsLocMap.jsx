import React from "react";
import "./MeadowsLocMap.css";
import MeadowsLocMapHead from "./MeadowsLocMapHead";
import MeadowsMap from "./MeadowsMap";
const MeadowsLocMap = () => {
  return (
    <div className="meadowsMapLocContainer">
      <MeadowsLocMapHead/>
      <MeadowsMap/>
    </div>
  );
};

export default MeadowsLocMap;
