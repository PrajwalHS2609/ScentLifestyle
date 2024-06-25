import React from "react";
import "./FacialImg.css";
const FacialImg = () => {
  return (
    <div className="facialImgContainer">
      <div className="imgCover">
        <video
          src="https://videos.pexels.com/video-files/3182019/3182019-uhd_3840_2160_25fps.mp4"
          autoPlay
          loop
        mute
        ></video>
        <div className="cover">
          <div className="overCoverTxt">
            <h1>Facial Services</h1>
            <div className="coverUnderline"></div>
            <pre> </pre>
            <p>
              If you are seeking to revitalize and achieve a more youthful
              appearance for your face, consider exploring SCENT. By indulging
              in their mood-enhancing and skin-soothing treatment, you can
              fulfill your desire for a glowing complexion. Instead of
              tirelessly searching for "facial for glowing skin" or "facial
              offers near me," treat yourself to SCENT's
              rejuvenating experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialImg;
