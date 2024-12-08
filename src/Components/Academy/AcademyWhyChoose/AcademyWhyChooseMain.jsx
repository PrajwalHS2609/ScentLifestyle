import React from "react";
import "./AcademyWhyChoose.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const AcademyWhyChooseMain = () => {
  const academyCard = [
    {
      id: "1",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "2",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "3",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "4",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "5",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "6",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "7",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
    {
      id: "8",
      icon: faHandshake,
      head: "GET 100% JOB ASSISTANCE",
      para: "WE SUPPORT YOUR SUCCESSFUL START IN THE HAIR AND BEAUTY INDUSTRY",
    },
  ];
  return (
    <div className="academyWhyChoose-mainContainer">
      {academyCard.map((x) => (
        <div className="academyWhyChoose-mainCard" key={x.id}>
          <FontAwesomeIcon
            icon={x.icon}
            className="academyIcon"
          ></FontAwesomeIcon>
          <h3>{x.head}</h3>
          <p>{x.para}</p>
        </div>
      ))}
      <p>
        Embark on a transformative journey at SCENT Academy, where we prepare
        you for a thriving career in the hair and beauty industry with
        cutting-edge programs and comprehensive support.
      </p>
      <Link to={"/contract-us"}>
        <button>ENQUIRE NOW</button>
      </Link>
    </div>
  );
};

export default AcademyWhyChooseMain;
