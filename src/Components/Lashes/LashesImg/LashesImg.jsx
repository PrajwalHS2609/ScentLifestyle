import React from "react";
import "./LashesImg.css";
import lashesService from "./../../../video/LashesService.mp4"
const LashesImg = () => {
  return (
    <div className="lashesImgContainer">
      <div className="imgCover">
        <video
          src={lashesService}
          autoPlay
          loop
          muted
        ></video>
        <div className="cover">
          <div className="overCoverTxt">
            <h2>Lashes</h2>
            <div className="coverUnderline"></div>
            <pre> </pre>
            <p>
              Discover the secret to achieving voluminous eyelashes with both
              permanent and temporary eyelash extensions available at the
              conveniently located SCENT eyelash salon near you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LashesImg;
