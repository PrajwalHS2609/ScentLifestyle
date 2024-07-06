import React from "react";
import LocationNavBg from "./LocationNavBg/LocationNavBg";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";
import { Helmet } from "react-helmet";

const LocationPage = () => {
  return (
    <div className="locationContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Salon near Sahakar Nagar, Lavelle Road, JP Nagar, Whitefield &
          Jakkur
        </title>
        <meta
          name="description"
          content="Find premium Unisex SCENT Salon near Sahakar Nagar, Lavelle Road, JP Nagar, Whitefield & Jakkur. Book an Appointment!"
        />
        <link rel="canonical" href="https://scentlifestyle.com/location" />
      </Helmet>
      <LocationNavBg />
      <HelpNearYou />
      <LastComp />
    </div>
  );
};

export default LocationPage;
