import React from "react";
import "./NailSalonImg.css";
import { Helmet } from "react-helmet";
const NailSalonImg = () => {
  return (
    <div className="nailSalonImgContainer">
      <div className="nailImgCover">
        <video
          src="https://videos.pexels.com/video-files/3997851/3997851-uhd_4096_2160_25fps.mp4"
          loop
          muted
          autoPlay
        ></video>
        <div className="cover">
          <div className="overCoverTxt">
            <h2>Nail Service</h2>
            <div className="coverUnderline"></div>
            <pre> </pre>
            <p>
              SCENT offers a variety of nail salon services such as gel polish,
              acrylic nail extensions, nail art, O.P.I nails, chrome polish,
              ombre nails, cat eye gel polish, gel french polish,
              and glam polish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NailSalonImg;
