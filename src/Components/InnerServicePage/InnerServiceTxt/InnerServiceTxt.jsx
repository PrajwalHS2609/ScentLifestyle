import React from "react";
import "./InnerServiceTxt.css"
const InnerServiceTxt = (props) => {
  return (
    <div className="innerServiceTxtContainer">
      <div className="innerServiceTxtHeadContainer">
        <h2>{props.head}</h2>
        <div className="innerServiceTxtUnderline"></div>
      </div>
      <div className="innerServiceTxtParaContainer">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default InnerServiceTxt;
