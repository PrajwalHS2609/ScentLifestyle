import React from "react";
import "./SpaImg.css";
const SpaImg = () => {
  return (
    <div className="spaImgContainer">
      <div className="imgCover">
        <video
          src="https://videocdn.cdnpk.net/joy/content/video/free/video0458/large_preview/_import_60c06c593a3da8.26033887.mp4?filename=1104957_1080p_care_cream_1920x1080.mp4"
          autoPlay
          loop
        ></video>
        <div className="cover">
          <div className="overCoverTxt">
            <h2>Spa Services</h2>
            <div className="coverUnderline"></div>
            <pre> </pre>
            <p>
              Experience pure bliss and pamper yourself at SCENT rejuvenating
              spa. Immerse yourself in the soothing touch of calming massages,
              invigorate your senses with revitalizing body scrubs, and indulge
              in our exclusive Relax & Unwind spa packages, meticulously
              designed to cater to your individual needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaImg;
