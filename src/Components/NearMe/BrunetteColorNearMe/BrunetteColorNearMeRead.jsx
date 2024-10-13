import React, { useRef, useState } from 'react'
import BrunetteColorNearMeWhy from './BrunetteColorNearMeWhy';
import BrunetteColorNearMeLook from './BrunetteColorNearMeLook';
import BrunetteColorNearMeXp from './BrunetteColorNearMeXp';
import BrunetteColorNearMeService from './BrunetteColorNearMeService';
import BrunetteColorNearMeBook from './BrunetteColorNearMeBook';
import BrunetteColorNearMeBenefits from './BrunetteColorNearMeBenefits';

const BrunetteColorNearMeRead = () => {
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
      <BrunetteColorNearMeWhy />
      <div ref={switchRef} className="hairSalonNearMeReadDisplay">
        <BrunetteColorNearMeLook />
        <BrunetteColorNearMeXp />
        <BrunetteColorNearMeService />
        <BrunetteColorNearMeBenefits />
        <BrunetteColorNearMeBook />
      </div>
      <button>
        <h2 className="openBut" onClick={open}>
          Read {toggle ? "Less" : "More"}
        </h2>
      </button>
    </div>
  </div>
  )
}

export default BrunetteColorNearMeRead
