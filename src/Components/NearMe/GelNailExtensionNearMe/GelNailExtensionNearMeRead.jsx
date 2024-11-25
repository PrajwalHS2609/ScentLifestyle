import React, { useRef, useState } from 'react'
import GelNailExtensionNearMeWhyChoose from './GelNailExtensionNearMeWhyChoose';
import GelNailExtensionNearMeWhat from './GelNailExtensionNearMeWhat';
import GelNailExtensionNearMeProcess from './GelNailExtensionNearMeProcess';
import GelNailExtensionNearMeBenefits from './GelNailExtensionNearMeBenefits';
import GelNailExtensionNearMeHow from './GelNailExtensionNearMeHow';
import GelNailExtensionNearMeTrend from './GelNailExtensionNearMeTrend';
import GelNailExtensionNearMeWhy from './GelNailExtensionNearMeWhy';
import GelNailExtensionNearMeBook from './GelNailExtensionNearMeBook';

const GelNailExtensionNearMeRead = () => {
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
      <GelNailExtensionNearMeWhyChoose />
      <div ref={switchRef} className="hairSalonNearMeReadDisplay">
        <GelNailExtensionNearMeWhat />
        <GelNailExtensionNearMeProcess />
        <GelNailExtensionNearMeBenefits />
        <GelNailExtensionNearMeHow />
        <GelNailExtensionNearMeTrend />
        <GelNailExtensionNearMeWhy />
        <GelNailExtensionNearMeBook />
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

export default GelNailExtensionNearMeRead
