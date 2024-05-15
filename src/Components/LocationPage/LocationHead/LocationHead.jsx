import React from "react";
import "./LocationHead.css";
const LocationHead = (props) => {
  return (
    <div className="locationHeadContainer">
      <div className="locationHeadItem" id="locationHeadItem1">
        <h1>ScentLifestyle Salon in {props.loc}</h1>
      </div>
      <div className="locationWrapper">
        <div className="locationHeadContent" id="locationHeadContent1">
          {props.map}
        </div>
        <div className="locationHeadContent" id="locationHeadContent2">
          <div className="locationHeadItem" id="locationHeadItem2">
            <div className="locationInnerItem">
              <div className="locationHeadContact">
                <h3>CONTACT NUMBER</h3>
              </div>
              <div className="locationHeadContact1">
                <h2>{props.phone}</h2>
              </div>
            </div>
            <div className="locationInnerItem">
              <div className="locationHeadTiming">
                <h3>Timing</h3>
              </div>
              <div className="locationHeadTiming1">
                <p>Opens at 10 am - Closes at 8 pm</p>
              </div>
            </div>
          </div>
          <div className="locationHeadItem" id="locationHeadItem3">
            <div className="locationHeadAdd">
              <h3>Address</h3>
            </div>
            <div className="locationHeadAdd">{props.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHead;
