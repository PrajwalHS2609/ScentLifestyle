import React from "react";
import aromaBodySpaBanner from "./../../../../../Images/Blog/Aroma_Body_Spa/Banner.png";

const AromaBodySpaImg = () => {
  return (
    <div className="blogImg-content">
      <img
        src={aromaBodySpaBanner}
        alt="aroma Body Spa Banner"
        loading="lazy"
      />
    </div>
  );
};

export default AromaBodySpaImg;
