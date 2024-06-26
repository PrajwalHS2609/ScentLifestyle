import React from "react";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  return (
    <div className="workContainer">
      <img
        src="https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="workContent">
        <div className="innerWorkContent">
          <div className="workContentTxt1">
            <h2>
              <span>Our</span> work
            </h2>
          </div>
          <div className="workContentTxt2">
            <p>
              Refining our expertise to cater to your desires at every stage of
              your experience, our hair and beauty treatments offer a serene and
              pleasurable retreat from the everyday. Beginning with a
              personalized consultation with our talented team of stylists and
              technicians, to utilizing top-tier, award-winning, and ethical
              products, to the ultimate finishing touch; we are dedicated to
              indulging you during your time at SCENT.
            </p>
          </div>
          <div className="workContentTxt3">
            <pre>VIEW OUR WORK </pre>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="workIcon"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
