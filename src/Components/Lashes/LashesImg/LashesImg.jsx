import React from "react";
import "./LashesImg.css";
const LashesImg = () => {
  return (
    <div className="lashesImgContainer">
      <div className="imgCover">
        <video
          src="https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e1415eb4e9d7.21575951.mp4?filename=1106676_1080p_enjoy_bright_1920x1080.mp4"
          autoPlay
          loop
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
