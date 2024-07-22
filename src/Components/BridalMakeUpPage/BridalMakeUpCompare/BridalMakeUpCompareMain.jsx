import React from "react";
import img2Before from "./../../../Images/BeforeAfter/Img2Before.jpg";
import img2After from "./../../../Images/BeforeAfter/Img2After.jpg";
import img5Before from "./../../../Images/BeforeAfter/Img5Before.jpg"
import img5After from "./../../../Images/BeforeAfter/Img5After.jpg"
import ImgCompareCard from "../../MicroBladingPage/MicroBladingCompare/ImgCompareCard";
const BridalMakeUpCompareMain = () => {
  return (
    <div className="MicroBladingCompareMain">
      <ImgCompareCard
        imgBefore={img2Before}
        imgAfter={img2After}
        imgBeforeAlt="img2Before"
        imgAfterAlt="img2After"
      />

      <ImgCompareCard
        imgBefore={img5Before}
        imgAfter={img5After}
        imgBeforeAlt="img5Before"
        imgAfterAlt="img5After"
      />
    </div>
  );
};

export default BridalMakeUpCompareMain;
