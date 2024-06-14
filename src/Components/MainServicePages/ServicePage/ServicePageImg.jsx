import React from "react";
import "./ServiceInnerPage.css";
const ServicePageImg = () => {
  return (
    <div className="servicePageImgContainer">
      <div className="imgCover">
        <video
          src="https://videocdn.cdnpk.net/joy/content/video/free/video0460/large_preview/_import_60d2f41e3bcdc1.08424385.mp4"
          autoPlay loop
        ></video>
        <div className="serviceCover">
          <div className="serviceOverCoverTxt">
            <h2>SALON SERVICES</h2>
            <div className="serviceCoverUnderline"></div>
            <pre> </pre>
            <p>
              Indulge in the opulent offerings of the SCENT Salon menu,
              meticulously crafted to address your every need and enhance your
              natural radiance. Step into a realm of luxury and sophistication,
              where you will be pampered like the regal being you truly are.
              Immerse yourself in the ultimate unisex salon experience,
              encompassing top-notch hair, spa & wellness, personal grooming,
              and bridal services, exclusively available at our esteemed
              establishment in Bangalore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageImg;
