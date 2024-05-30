import React from "react";
import HeadMassageHead from "./HeadMassageHead";
import HeadMassagePara from "./HeadMassagePara";
import "../NearMe.css";

const HeadMassageMain = () => {
  return (
    <div className="nearContainer">
      <HeadMassageHead />
      <HeadMassagePara />
    </div>
  );
};

export default HeadMassageMain;
