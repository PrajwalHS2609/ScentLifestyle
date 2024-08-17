import React from "react";
import img1Before from "./../../../Images/BeforeAfter/Img1Before.jpg"
import img1After from "./../../../Images/BeforeAfter/Img1After.jpg"
import img3Before from "./../../../Images/BeforeAfter/Img3Before.jpg"
import img3After from "./../../../Images/BeforeAfter/Img3After.jpg"
import img4Before from "./../../../Images/BeforeAfter/Img4Before.jpg"
import img4After from "./../../../Images/BeforeAfter/Img4After.jpg"
import ImgCompareCard from "./ImgCompareCard";
import "./MicroBladingCompare.css"
const MicroBladingCompareMain = () => {
  return (
    <div className="MicroBladingCompareMain">
      <ImgCompareCard
        imgBefore={img1Before}
        imgAfter={img1After}
        imgBeforeAlt="img1Before"
        imgAfterAlt="img1After"
      />

      <ImgCompareCard
        imgBefore={img3Before}
        imgAfter={img3After}
        imgBeforeAlt="img3Before"
        imgAfterAlt="img3After"
      />
      <ImgCompareCard
        imgBefore={img4Before}
        imgAfter={img4After}
        imgBeforeAlt="img4Before"
        imgAfterAlt="img4After"
        
      />

    </div>
  );
};

export default MicroBladingCompareMain;
