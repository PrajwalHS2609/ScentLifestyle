import React from "react";
import nailExtensionServiceVid from "./../../../video/NailExtensionsService.mp4";

const NailExtensionBangaloreVid = () => {
  return (
    <div className="nailExtImg">
      <video src={nailExtensionServiceVid} muted loop autoPlay></video>
    </div>
  );
};

export default NailExtensionBangaloreVid;
