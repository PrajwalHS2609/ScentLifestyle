import React from "react";
import "./ServiceInnerPage.css";
import serviceVid from "./../../../video/ServicePage.mp4";
const ServicePageImg = () => {
  return (
    <div className="servicePageImgContainer">
      <div className="imgCover">
        <video src={serviceVid} autoPlay loop></video>
        <div className="serviceCover">
          <div className="serviceOverCoverTxt">
            <h2>Salon Services</h2>
            <div className="serviceCoverUnderline"></div>
            <p>
              <br />
              Experience luxury and sophistication with SCENT's opulent menu,
              designed to enhance your natural radiance. Pamper yourself with
              top-notch hair, spa & wellness, personal grooming, and bridal
              services at our exclusive unisex salon in Bangalore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageImg;
