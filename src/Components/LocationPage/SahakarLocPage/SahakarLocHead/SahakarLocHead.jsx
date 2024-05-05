import React from "react";
import "./SahakarLocHead.css";
const SahakarLocHead = () => {
  return (
    <div className="sahakarLocHeadContainer">
      <div className="sahakarLocHeadContent" id="sahakarLocHeadContent1">
        <div className="sahakarLocHeadItem" id="sahakarLocHeadItem1">
          <h1>Salon in Sahakar Nagar</h1>
        </div>
      </div>
      <div className="sahakarLocHeadContent">
        <div className="sahakarLocHeadItem" id="sahakarLocHeadItem2">
          <div className="sahakarLocInnerItem">
            <div className="sahakarLocHeadContact">
              <h3>CONTACT NUMBER</h3>
            </div>
            <div className="sahakarLocHeadContact1"></div>
          </div>
          <div className="sahakarLocInnerItem">
            <div className="sahakarLocHeadTiming">
              <h3>Timing</h3>
            </div>
            <div className="sahakarLocHeadTiming1"></div>
          </div>
        </div>
        <div className="sahakarLocHeadItem" id="sahakarLocHeadItem3">
          <div className="sahakarLocHeadAdd">
            <h3>Address</h3>
          </div>
          <div className="sahakarLocHeadAdd">
            F block, 325/8, 60 Feet Rd, Opp Axis Bank, Sahakar Nagar,
            Byatarayanapura, Bengaluru, Karnataka 560092
          </div>
        </div>
      </div>
    </div>
  );
};

export default SahakarLocHead;
