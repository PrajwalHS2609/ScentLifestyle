import React from "react";
import HelpNearYou from "../Help/HelpNearYou";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";

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
      <NavBg />
      <HelpNearYou />
      
    </div>
  );
};

export default LocationPage;
