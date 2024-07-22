import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

const ImgCompareCard = (props) => {
  return (
    <div className="imgCompareCardContainer">
      <ImgComparisonSlider className="compareSlider">
        <img
          slot="first"
          src={props.imgBefore}
          alt={props.imgBeforeAlt}
          className="imgBefore"
        />
        <img
          slot="second"
          src={props.imgAfter}
          alt={props.imgAfterAlt}
          className="imgAfter"
        />
      </ImgComparisonSlider>
    </div>
  );
};

export default ImgCompareCard;
