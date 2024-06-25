import React from "react";
import "./BeautyImg.css";
const BeautyImg = () => {
  return (
    <div className="beautyImgContainer">
      <div className="imgCover">
        <video
          src="https://videocdn.cdnpk.net/joy/content/video/free/video0458/large_preview/_import_60c06d2029e8c9.81036975.mp4?filename=1104960_1080p_wellbeing_care_1920x1080.mp4"
          autoPlay
          loop
        ></video>
        <div className="cover">
          <div className="overCoverTxt">
            <h2>Beauty Essentials</h2>
            <div className="coverUnderline"></div>
            <pre> </pre>
            <p>
              Discover a wide array of services offered by SCENT, including our
              exclusive Bikini & Brazilian waxing services using peel-off wax or
              our soothing cartridge wax. Enhance your skin's radiance with our
              luxurious detanning treatments and indulge in our meticulously
              crafted anti-aging regimens featuring mesotherapy and other
              rejuvenating techniques. Don't miss out on these lavish services,
              book with us today to learn more and experience the
              ultimate pampering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyImg;
