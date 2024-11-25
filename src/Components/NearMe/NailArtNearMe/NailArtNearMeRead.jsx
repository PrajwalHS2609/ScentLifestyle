import React, { useRef, useState } from "react";
import NailArtNearMeWhat from "./NailArtNearMeWhat";
import NailArtNearMePopular from "./NailArtNearMePopular";
import NailArtNearMeWhy from "./NailArtNearMeWhy";
import NailArtNearMeBook from "./NailArtNearMeBook";
import NailArtNearMeOccasion from "./NailArtNearMeOccasion";
import NailArtNearMeFinal from "./NailArtNearMeFinal";
import NailArtNearMeBenefits from "./NailArtNearMeBenefits";

const NailArtNearMeRead = () => {
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
        <NailArtNearMeWhat />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <NailArtNearMePopular />
          <NailArtNearMeWhy />
          <NailArtNearMeBook />
          <NailArtNearMeOccasion />
          <NailArtNearMeBenefits />
          <NailArtNearMeFinal />
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

export default NailArtNearMeRead;
