import React from "react";
import "./HairServiceImg.css";
const HairServiceImg = () => {
  return (
    <div className="hairServiceImgContainer">
      <div className="hairImgCover">
        <video
          src="https://videocdn.cdnpk.net/joy/content/video/free/video0460/large_preview/_import_60d2f2414609d8.68650584.mp4"
          autoPlay
          loop
        ></video>
        <div className="hairCover">
          <div className="hairOverCoverTxt">
            <h2>Hair Services</h2>
            <div className="hairCoverUnderline"></div>
            <pre> </pre>
            <p>
              Visit SCENT Hair Salon for top-notch haircuts, hair
              coloring, hair spa, and hair smoothening services performed by
              expert stylists trained by Sassoon. Your journey to fabulous hair
              starts here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairServiceImg;
