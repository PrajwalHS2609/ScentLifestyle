import React from "react";
import "./BeardImg.css";
const BeardImgPara = () => {
  return (
    <div className="beardImgContainer">
      <div className="beardImgCover">
        <img src="https://img.freepik.com/free-photo/brunette-man-lies-with-open-eyes-while-barber-cuts-his-beard_1304-2776.jpg?t=st=1714371443~exp=1714375043~hmac=c0f11cdac36f9320bcaab047cdc9aa22c09ce87a30a1ad54c87e29df3bf59882&w=900" alt="" />
        <div className="cover">
          <div className="overCoverTxt">
            <h1>BEARD STYLING</h1>
            <div className="coverUnderline"></div>
            <pre> </pre>
            <p>
              Men’s grooming services include beard styling, our signature beard
              shaving, trimming and signature beard spa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeardImgPara;
