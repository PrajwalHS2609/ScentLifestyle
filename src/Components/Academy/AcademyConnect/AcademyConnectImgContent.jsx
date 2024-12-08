import React from "react";
import scentLogo from "./../../../Images/ScentLogo Circle.png";

const AcademyConnectImgContent = () => {
  const connectImg = [
    {
      id: "1",
      img: "https://img.freepik.com/free-photo/portrait-redhair-girl_1385-2242.jpg?uid=R153459844&ga=GA1.1.2007220466.1732621723&semt=ais_hybrid",
      alt: "",
    },
    {
      id: "2",
      img: "https://img.freepik.com/free-photo/portrait-redhair-girl_1385-2242.jpg?uid=R153459844&ga=GA1.1.2007220466.1732621723&semt=ais_hybrid",
      alt: "",
    },
    {
      id: "3",
      img: "https://img.freepik.com/free-photo/portrait-redhair-girl_1385-2242.jpg?uid=R153459844&ga=GA1.1.2007220466.1732621723&semt=ais_hybrid",
      alt: "",
    },
    {
      id: "4",
      img: "https://img.freepik.com/free-photo/portrait-redhair-girl_1385-2242.jpg?uid=R153459844&ga=GA1.1.2007220466.1732621723&semt=ais_hybrid",
      alt: "",
    },
    {
      id: "5",
      img: "https://img.freepik.com/free-photo/portrait-redhair-girl_1385-2242.jpg?uid=R153459844&ga=GA1.1.2007220466.1732621723&semt=ais_hybrid",
      alt: "",
    },
    {
      id: "6",
      img: "https://img.freepik.com/free-photo/portrait-redhair-girl_1385-2242.jpg?uid=R153459844&ga=GA1.1.2007220466.1732621723&semt=ais_hybrid",
      alt: "",
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
            Dive into professional hairstyling excellence with the Sassoon
            Connect Academy School Connection at SCENT Academy, the
            exclusive partner of The Sassoon Connect Academy in India since
            2016. Our academy is your gateway to achieving recognition and
            prestige in the hairstyling world, standing as a pillar of
            professionalism and innovation.
          </p>
        </div>
        <div className="academyConnect-item3">
          <p>
            With instructors trained directly by professionals from the Sassoon
            Connect Academy, we guarantee the highest standards of industry
            knowledge and expertise. This partnership offers an immersive
            learning experience, featuring the exclusive ABC Cut and Colour
            techniques of the Sassoon Connect Academy, renowned for their
            precision and artistic approach.
          </p>
        </div>
      </div>
    </>
  );
};

export default AcademyConnectImgContent;
