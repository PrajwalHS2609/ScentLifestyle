import React from "react";
import microBladingVid from "./../../video/MicroBlading.mp4";

const MicroBladingImg = () => {
  return (
    <div className="servicePageImgContainer">
      <div className="imgCover">
        <video src={microBladingVid} autoPlay loop muted></video>
        <div className="serviceCover">
          <div className="serviceOverCoverTxt">
            <h2>Eyebrow Microblading</h2>
            <div className="serviceCoverUnderline"></div>
            <br />
            <p>
              A semi-permanent solution for perfectly shaped and fuller
              eyebrows. Our skilled technicians use precise, hair-like strokes
              to create a natural look that lasts up to two years. Achieve your
              ideal brow shape with minimal maintenance and wake up every day
              with flawless brows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroBladingImg;
