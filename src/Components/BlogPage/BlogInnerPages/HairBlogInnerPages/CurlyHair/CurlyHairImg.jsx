import React from "react";
import curlyHairBanner from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Banner.png";

const CurlyHairImg = () => {
  return (
    <div className="hairTrimImg">
      <img src={curlyHairBanner} alt="curlyHairBanner" loading="lazy" />
    </div>
  );
};

export default CurlyHairImg;