import React from "react";
import "./MakeOver.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const MakeOver = () => {
  return (
    <div className="makeContainer">
      <div className="makeContent1">
        <div className="makeTxt">
          <h1>Bounce for a Makeover</h1>
        </div>
        <div className="makeUnderline"></div>
      </div>
      <div className="makeContent2">
        <div className="makeItem">
        

          <ReactCompareSlider
            className="makeSlider1"
            itemOne={
              <ReactCompareSliderImage
                src=""
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-1.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src=""
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-1.5.png"
                alt="Image two"
              />
            }
          />
        </div>
        <div className="makeItem">
          <ReactCompareSlider
            className="makeSlider1"
            itemOne={
              <ReactCompareSliderImage
                src=""
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-2.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src=""
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-2.5.png"
                alt="Image two"
              />
            }
          />
        </div>
        <div className="makeItem">
          <ReactCompareSlider
            className="makeSlider1"
            itemOne={
              <ReactCompareSliderImage
                src=""
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-3.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="..."
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-3.5.png"
                alt="Image two"
              />
            }
          />
        </div>
        <div className="makeItem">
          <ReactCompareSlider
            className="makeSlider1"
            itemOne={
              <ReactCompareSliderImage
                src="..."
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-4.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="..."
                srcSet="https://www.bouncehere.com/wp-content/uploads/2018/10/instafeed-4.5.png"
                alt="Image two"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MakeOver;
