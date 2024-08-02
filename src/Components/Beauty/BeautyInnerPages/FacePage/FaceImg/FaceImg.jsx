import React from "react";
import faceImg from "./../../../../../Images/BeautyInnerPages/Face.png";
import "./FaceImg.css";
const FaceImg = () => {
  return (
    <div className="faceImgContainer">
      <img src={faceImg} alt="faceImg" />
    </div>
  );
};

export default FaceImg;
