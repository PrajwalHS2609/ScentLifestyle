import React from "react";
import "./AcademyWhyChoose.css";
import training from "./../../../Images/Academy/whyScent/training.png";
import partner from "./../../../Images/Academy/whyScent/hand-shake.png";
import brush from "./../../../Images/Academy/whyScent/brush.png";
import curriculum from "./../../../Images/Academy/whyScent/curriculum.png";
import career from "./../../../Images/Academy/whyScent/mentorship.png";
import community from "./../../../Images/Academy/whyScent/socialjustice.png";
import recognition from "./../../../Images/Academy/whyScent/reward.png";
import flexible from "./../../../Images/Academy/whyScent/book.png";

import { Link } from "react-router-dom";
const AcademyWhyChooseMain = () => {
  const academyCard = [
    {
      id: "1",
      icon: training,
      head: "Expert-Led Training:",
      para: "Learn from industry-leading professionals with years of experience in beauty and wellness.",
    },
    {
      id: "2",
      icon: partner,
      head: "Exclusive Schwarzkopf Partnership",
      para: " The only academy in Southeast Asia offering exclusive access to Schwarzkopf Professional Connect resources.",
    },
    {
      id: "3",
      icon: brush,
      head: "State-of-the-Art Facilities",
      para: "Train in modern, fully equipped studios designed to provide a hands-on learning experience.",
    },
    {
      id: "4",
      icon: curriculum,
      head: "Comprehensive Curriculum:",
      para: " Gain expertise in hairstyling, beauty treatments, and wellness services with a diverse range of courses.",
    },
    {
      id: "5",
      icon: career,
      head: "Career-Focused Approach:",
      para: " Our programs are designed to help you build a successful career with practical skills and real-world exposure.",
    },
    {
      id: "6",
      icon: community,
      head: "Vibrant Community:",
      para: " Be part of a supportive network of like-minded individuals passionate about beauty and personal growth.",
    },
    {
      id: "7",
      icon: flexible,
      head: "Flexible Learning Options:",
      para: " With personalized schedules and course formats, you can balance your learning journey with other commitments.",
    },
    {
      id: "8",
      icon: recognition,
      head: "Industry Recognition",
      para: " Certifications from ScentLifestyle Academy are widely recognized and respected in the beauty industry.",
    },
  ];
  return (
    <div className="academyWhyChoose-mainContainer">
      {academyCard.map((x) => (
        <div className="academyWhyChoose-mainCard" key={x.id}>
          <img src={x.icon} alt={x.head} />
          <h3>{x.head}</h3>
          <p>{x.para}</p>
        </div>
      ))}
      <p>
        Begin your journey to success at SCENT Academy, where we equip you with
        innovative programs and unwavering support to build a flourishing career
        in the hair and beauty industry.
      </p>
      <Link to={"/contract-us"}>
        <button>ENQUIRE NOW</button>
      </Link>
    </div>
  );
};

export default AcademyWhyChooseMain;
