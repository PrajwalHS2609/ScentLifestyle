import React from "react";
import scentLogo from "./../../../Images/ScentLogo Circle.png";
import img1 from "./../../../Images/Academy/academyConnect/1.png";
import img2 from "./../../../Images/Academy/academyConnect/2.png";
import img3 from "./../../../Images/Academy/academyConnect/3.png";
import img4 from "./../../../Images/Academy/academyConnect/4.png";
import img5 from "./../../../Images/Academy/academyConnect/5.png";
import img6 from "./../../../Images/Academy/academyConnect/6.png";

const AcademyConnectImgContent = () => {
  const connectImg = [
    {
      id: "1",
      img: img1,
      alt: "img1",
    },
    {
      id: "2",
      img: img2,
      alt: "img2",
    },
    {
      id: "3",
      img: img3,
      alt: "img3",
    },
    {
      id: "4",
      img: img4,
      alt: "",
    },
    {
      id: "5",
      img: img5,
      alt: "img5",
    },
    {
      id: "6",
      img: img6,
      alt: "img6",
    },
  ];
  return (
    <>
      <div className="academyConnect-content">
        <div className="academyConnect-item1">
          {connectImg.map((x) => (
            <div className="academyConnect-itemCard" key={x.id}>
              <img src={x.img} alt={x.alt} />
            </div>
          ))}
        </div>
        <div className="academyConnect-item2">
          <img src={scentLogo} alt="" />
        </div>
      </div>
      <div className="academyConnect-content">
        <div className="academyConnect-item3">
          <p>
            Immerse yourself in professional hairstyling excellence at SCENT
            Academy, proudly partnered with Schwarzkopf Professional Academy in
            India since 2022. As a hub of innovation and professionalism, our
            academy paves the way for you to gain recognition and prestige in
            the dynamic world of hairstyling.
          </p>
        </div>
        <div className="academyConnect-item3">
          <p>
            Led by instructors trained by experts from the Schwarzkopf
            Professional Academy, we deliver unmatched industry knowledge and
            expertise. Through this partnership, we offer an immersive learning
            experience featuring the exclusive hair Cut and Colour techniques,
            celebrated for their precision and artistic mastery.
          </p>
        </div>
      </div>
    </>
  );
};

export default AcademyConnectImgContent;
