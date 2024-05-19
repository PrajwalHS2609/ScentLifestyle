import React from "react";
import "./StyleCrewPage.css";
import StyleCrewImages from "./StyleCrewImages";
import crew1 from "./../../Images/Rose - Salon Director.jpeg.jpg";
import crew2 from "./../../Images/Sam - Creative Director.jpg";
import crew3 from "./../../Images/Lobsang - Top Stylist.jpg";
import crew4 from "./../../Images/Kevin - Top Stylist.jpg";
const StyleCrewImg = () => {
  return (
    <div className="styleCrewImgContainer">
      {/* <div className="styleCrewUnderline"></div> */}
      <div className="styleCrewImgContent">
        <StyleCrewImages img={crew1} />
        <StyleCrewImages img={crew2} />
        <StyleCrewImages img={crew3} />
        <StyleCrewImages img={crew4} />
        <StyleCrewImages img="https://website2.tryseoservices.com/wp-content/uploads/2024/03/2.png" />
        <StyleCrewImages img="https://website2.tryseoservices.com/wp-content/uploads/2024/03/5.png" />
      </div>
      {/* <div className="styleCrewUnderline"></div> */}
    </div>
  );
};

export default StyleCrewImg;
