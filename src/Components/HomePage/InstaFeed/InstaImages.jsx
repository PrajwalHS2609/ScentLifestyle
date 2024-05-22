import React from "react";
import "./InstaFeed.css";
import { InstagramEmbed } from "react-social-media-embed";
import ReactPlayer from 'react-player'


const InstaImages = (props) => {
  return (
    <div className="instaFeedVidContainer">
      {/* <InstagramEmbed url={props.vid} width={328} height={550} /> */}
      <ReactPlayer url={props.vid} />

    </div>
  );
};

export default InstaImages;
