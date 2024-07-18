import React from "react";
import "./BeautyImg.css";
import beautyEssentialVid from "./../../../video/BeautyEssentialsService.mp4";
const BeautyImg = () => {
  return (
    <div className="beautyImgContainer">
      <div className="imgCover">
        <video src={beautyEssentialVid} autoPlay loop></video>
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
