import React from "react";
import "./Video.css";
import scentVid from "./../../../video/ScentHomeVid.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import HomeForm from "../HomeForm/HomeForm";

const Video = () => {
  let handlePopUp = () => {
    let open = document.querySelector(".homeFormWrapper");
    open.style.display = "flex";
  };
  let handleExit = () => {
    let close = document.querySelector(".homeFormWrapper");
    close.style.display = "none";
  };
  const HomeFormContain = () => {
    return (
      <div className="homeFormWrapper">
        <div className="homeFormExit">
          <FontAwesomeIcon
            icon={faX}
            className="formIcon"
            onClick={handleExit}
          ></FontAwesomeIcon>
        </div>
        <HomeForm />
      </div>
    );
  };
  return (
    <div className="vidContainer">
      <HomeFormContain />
      <video className="videoContent" src={scentVid} autoPlay loop muted />
      <div className="vidTxt">
        <pre onClick={handlePopUp}>Book an Appointment Now</pre>
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
