import React from "react";
import SahakarLocImg from "./SahakarLocImg/SahakarLocImg";
import SahakarLocHead from "./SahakarLocHead/SahakarLocHead";
import SahakarLocService from "./SahakarLocService/SahakarLocService";
import "./SahakarLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import SahakarLocMap from "./SahakarLocMap/SahakarLocMap";
import LastComp from './../../LastComp/LastComp';
import LocEnquire from "../LocEnquire/LocEnquire";
import LocationArrow from "../LocationArrow/LocationArrow";
const SahakarLocPage = () => {
  return (
    <div className="sahakarLocPageContainer">
      <LocationNavBg />
      <SahakarLocImg />
<LocationArrow/>
      <div className="sahakarLocPageContent">
        <SahakarLocHead />
        <SahakarLocService />
        <SahakarLocMap />
        <LocEnquire/>
      </div>
      <LastComp/>
    </div>
  );
};

export default SahakarLocPage;
