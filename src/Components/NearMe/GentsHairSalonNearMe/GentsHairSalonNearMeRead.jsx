import React, { useRef, useState } from "react";
import GentsHairSalonNearMeHead from "./GentsHairSalonNearMeHead";
import GentsHairSalonNearMeWhy from './GentsHairSalonNearMeWhy';
import GentsHairSalonNearMeXp from './GentsHairSalonNearMeXp';
import GentsHairSalonNearMeService from './GentsHairSalonNearMeService';
import GentsHairSalonNearMeImp from './GentsHairSalonNearMeImp';
import GentsHairSalonNearMeHow from "./GentsHairSalonNearMeHow";
import GentsHairSalonNearMeBest from "./GentsHairSalonNearMeBest";

const GentsHairSalonNearMeRead = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "block";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="hairSalonNearMeRead">
      <div className="hairSalonNearMeReadHead">
        <GentsHairSalonNearMeHead />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <GentsHairSalonNearMeWhy />
          <GentsHairSalonNearMe />
          <GentsHairSalonNearMeXp />
          <GentsHairSalonNearMeService />
          <GentsHairSalonNearMeImp />
          <GentsHairSalonNearMeHow/>
          <GentsHairSalonNearMeBest/>
        </div>
        <button>
          <h2 className="openBut" onClick={open}>
            Read {toggle ? "Less" : "More"}
          </h2>
        </button>
      </div>
    </div>
  );
};

export default GentsHairSalonNearMeRead;
