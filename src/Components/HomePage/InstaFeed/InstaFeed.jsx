import React from "react";
import "./InstaFeed.css";
import InstaHead from "./InstaHead";
import InstaPara from "./InstaPara";
import InstaImgContain from "./InstaImgContain";
const InstaFeed = () => {
  return (
    <div className="instaContainer">
     <InstaHead/>
     <InstaPara/>
     <InstaImgContain/>
     </div>
  );
};

export default InstaFeed;
