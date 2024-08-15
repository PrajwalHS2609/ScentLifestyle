import React from "react";
import bridalVid from "./../../video/BridalMakeup.mp4";
const BridalMakeUpImg = () => {
  return (
    <div className="servicePageImgContainer">
      <div className="imgCover">
        <video src={bridalVid} autoPlay loop muted></video>
        <div className="serviceCover">
          <div className="serviceOverCoverTxt">
            <h2>Bridal Makeup</h2>
            <div className="serviceCoverUnderline"></div>
            <br />
            <p>
              Expert makeup artists and hairstylists create flawless, radiant
              looks that enhance natural beauty and complement the wedding
              theme. Using premium products and techniques, we guarantee
              long-lasting perfection from trial sessions to final touch-ups.
              Trust us for a stress-free, glamorous transformation, leaving you
              confident and picture-perfect for your wedding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridalMakeUpImg;
