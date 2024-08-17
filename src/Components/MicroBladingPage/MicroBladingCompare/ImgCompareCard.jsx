import React, { useState } from "react";
// import { ImgComparisonSlider } from "@img-comparison-slider/react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import ContentLoader from "react-content-loader";

const ImgCompareCard = (props) => {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div className="imgCompareCardContainer">
      {loading && <ContentLoader />}
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={props.imgBefore}
            srcSet=""
            alt={props.imgBeforeAlt}
            onLoad={handleImageLoad}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={props.imgAfter}
            srcSet=""
            alt={props.imgAfterAlt}
            onLoad={handleImageLoad} // Set loading to false when the image loads
          />
        }
        style={{ display: loading ? "none" : "block" }} // Hide the slider until the images are loaded
      />
    </div>
  );
};

export default ImgCompareCard;
