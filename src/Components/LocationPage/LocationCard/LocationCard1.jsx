import React from "react";
import "./LocationCard1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
const LocationCard1 = (props) => {
  return (
    <div className="LocationCard1Container">
      <div className="LocationCard1Content" id="LocationCard1Content1">
        {props.map}
      </div>

      <div className="LocationCard1Content" id="LocationCard1Content2">
        <div
          className="LocationCard1Content2Item"
          id="LocationCard1Content2Item1"
        >
          <h2>{props.locAddress}</h2>
        </div>

        <div
          className="LocationCard1Content2Item"
          id="LocationCard1Content2Item2"
        >
          <div className="LocationCard1Loc" id="LocationCard1Loc1">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="locIcon"
            ></FontAwesomeIcon>
          </div>
          <div className="LocationCard1Loc" id="LocationCard1Loc2">
            <div className="LocationCard1LocAdd">
              <h3>Location</h3>
            </div>
            <div className="LocationCard1LocAdd">
              <h4>SCENT Salon</h4>
              <p>{props.address}</p>
            </div>
          </div>
        </div>
        <div
          className="LocationCard1Content2Item"
          id="LocationCard1Content2Item3"
        >
          {" "}
          <div className="LocationCard1Loc" id="LocationCard1Loc1">
            <FontAwesomeIcon
              icon={faPhone}
              className="locIcon"
            ></FontAwesomeIcon>
          </div>
          <div className="LocationCard1Loc" id="LocationCard1Loc2">
            <div className="LocationCard1LocAdd">
              <h3>Call Us</h3>
            </div>
            <div className="LocationCard1LocAdd">
              <h4>
                <a href={props.phoneLink}>{props.phone}</a>
              </h4>
            </div>
          </div>
        </div>
        <div
          className="LocationCard1Content2Item"
          id="LocationCard1Content2Item4"
        >
          {" "}
          <div className="LocationCard1Loc" id="LocationCard1Loc1">
            <FontAwesomeIcon
              icon={faClock}
              className="locIcon"
            ></FontAwesomeIcon>
          </div>
          <div className="LocationCard1Loc" id="LocationCard1Loc2">
            <div className="LocationCard1LocAdd">
              <h3>Timing</h3>
            </div>
            <div className="LocationCard1LocAdd">
              <h4>Opens at 10 am - Closes at 8 pm</h4>
            </div>
          </div>
        </div>
        <div className="locButton">
          <a href="https://scent.zenoti.com/webstoreNew/services">
            <button>Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationCard1;
