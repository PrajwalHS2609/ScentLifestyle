import React from "react";
import stepbystepBanner from "./../../../../../Images/Blog/Step-by-Step Guide/Banner.png";

const StepByStepImg = () => {
  return (
    <div className="blogImg-content">
      <img src={stepbystepBanner} alt="stepbystepBanner" loading="lazy" />
    </div>
  );
};

export default StepByStepImg;
