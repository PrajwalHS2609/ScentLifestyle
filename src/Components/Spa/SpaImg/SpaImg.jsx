import React from "react";
import "./SpaImg.css";
import spaVid from "./../../../video/SpaService.mp4";
const SpaImg = () => {
  return (
    <div className="spaImgContainer">
      <div className="imgCover">
        <video src={spaVid} autoPlay loop muted></video>
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
