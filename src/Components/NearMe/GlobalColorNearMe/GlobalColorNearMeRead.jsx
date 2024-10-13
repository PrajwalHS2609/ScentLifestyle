import React, { useRef, useState } from 'react'
import GlobalColorNearMeWhyChoose from './GlobalColorNearMeWhyChoose';
import GlobalColorNearMeWhat from './GlobalColorNearMeWhat';
import GlobalColorNearMeTech from './GlobalColorNearMeTech';
import GlobalColorNearMeXp from './GlobalColorNearMeXp';
import GlobalColorNearMeBook from './GlobalColorNearMeBook';
import GlobalColorNearMeWhy from './GlobalColorNearMeWhy';

const GlobalColorNearMeRead = () => {
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
      <GlobalColorNearMeWhyChoose />
      <div ref={switchRef} className="hairSalonNearMeReadDisplay">
        <GlobalColorNearMeWhat />
        <GlobalColorNearMeTech />
        <GlobalColorNearMeXp />
        <GlobalColorNearMeWhy />
        <GlobalColorNearMeBook />
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

export default GlobalColorNearMeRead
