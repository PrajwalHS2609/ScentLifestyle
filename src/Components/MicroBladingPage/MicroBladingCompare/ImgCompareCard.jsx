import React from "react";
// import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const ImgCompareCard = (props) => {
  return (
    <div className="imgCompareCardContainer">
      {/* <ImgComparisonSlider className="compareSlider">
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
      </ImgComparisonSlider> */}
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={props.imgBefore}
            srcSet=""
            alt={props.imgBeforeAlt}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={props.imgAfter}
            srcSet=""
            alt={props.imgAfterAlt}
          />
        }
      />
    </div>
  );
};

export default ImgCompareCard;
