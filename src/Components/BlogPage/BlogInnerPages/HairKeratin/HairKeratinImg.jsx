import React from "react";
import hairKeratin from "./../../../../Images/Blog/Keratin_Hair_Treatment/Banner Image.png";

const HairKeratinImg = () => {
  return (
    <div className="hairTrimImg">
      <img src={hairKeratin} alt="hairKeratin" loading='lazy'/>
    </div>
  );
};

export default HairKeratinImg;
