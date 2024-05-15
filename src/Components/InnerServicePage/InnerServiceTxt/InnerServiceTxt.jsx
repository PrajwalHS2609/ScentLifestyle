import React from "react";

const InnerServiceTxt = (props) => {
  return (
    <div className="innerServiceTxtContainer">
      <div className="innerServiceTxtHeadContainer">
        <h1>{props.head}</h1>
        <div className="innerServiceTxtUnderline"></div>
      </div>
      <div className="innerServiceTxtParaContainer">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default InnerServiceTxt;
