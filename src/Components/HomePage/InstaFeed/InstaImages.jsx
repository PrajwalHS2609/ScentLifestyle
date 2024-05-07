import React from "react";
import "./InstaFeed.css";
import { InstagramEmbed } from "react-social-media-embed";

const InstaImages = (props) => {
  return (
    <div className="instaFeedVidContainer">
      <InstagramEmbed url={props.vid} width={328} height={550} />
    </div>
  );
};

export default InstaImages;
