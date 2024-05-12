import React from "react";
import { Link } from "react-router-dom";
import LocationNavBg from "./LocationNavBg/LocationNavBg";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";

const LocationPage = () => {
  return (
    <div className="locationContainer">
 <LocationNavBg/>
 <HelpNearYou/>
 <LastComp/>
    </div>
  );
};

export default LocationPage;
