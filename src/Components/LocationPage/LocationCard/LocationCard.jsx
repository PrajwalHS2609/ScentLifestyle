import React from "react";
import "./LocationCard.css";
const LocationCard = (props) => {
  return (
    <div className="locCardContainer">
      <div className="locCardContent">{props.map}</div>
      <div className="locCardContent" id="locCardAddContent">
        <div className="locCardAddHead">
          <h3>{props.head}</h3>
          <div className="locCardAddHeadUnderline"></div>
        </div>
        <div className="locCardAddressWrapper">
          <div className="locCardAddressItem">
            <div className="locCardAddress">
              <h4>CONTACT NUMBER</h4>
              <p>
                <a href={props.phoneLink}>{props.phone}</a>
              </p>
            </div>
            <div className="locCardAddress">
              <h4>Timing</h4>
              <p>Opens at 10 am - Closes at 8 pm</p>
            </div>
          </div>
          <div className="locCardAddressItem" id="locCardAddressName">
            <h4>Address</h4>
            <p>{props.address}</p>
          </div>
        </div>
        <div className="locCardAddressButton">
          <button>
            <a href="https://api.whatsapp.com/send?phone=919742232700">
              Book Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
