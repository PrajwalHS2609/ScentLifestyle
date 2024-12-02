import React from "react";
import "./Video.css";
import scentVid from "./../../../video/ScentHomeVid.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  return (
    <div className="vidContainer">
      <video className="videoContent" src={scentVid} autoPlay loop muted />
      <div className="vidTxt">
        <a href="https://api.whatsapp.com/send?phone=919742232700">
          {" "}
          <pre>Book an Appointment Now</pre>
        </a>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="vidIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="vidUnderline"></div>
    </div>
  );
};

export default Video;
