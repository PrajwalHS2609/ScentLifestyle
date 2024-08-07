import React from "react";
import "./InnerServiceTxt.css"
const InnerServiceTxt = (props) => {
  return (
    <div className="innerServiceTxtContainer">
      <div className="innerServiceTxtHeadContainer">
        <h1>{props.head}</h1>
        <h2>{props.head2}</h2>

        <div className="innerServiceTxtUnderline"></div>
      </div>
      <div className="innerServiceTxtParaContainer">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default InnerServiceTxt;
