import React from "react";
import hairJakkurImg from "./../../../../Images/SahakarNagar/Hair.png";
import "./HairSalonInJakkurImg.css"
const HairSalonInJakkurImg = () => {
  return (
    <div className="hairSalonInJakkurImg">
      <img src={hairJakkurImg} alt="hairJakkurImg" loading="lazy" />
    </div>
  );
};

export default HairSalonInJakkurImg;
