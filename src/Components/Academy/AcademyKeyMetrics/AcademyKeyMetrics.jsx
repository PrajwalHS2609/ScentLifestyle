import React from "react";
import "./AcademyKeyMetrics.css";
import CountUp from "react-countup";

const AcademyKeyMetrics = () => {
  const metric = [
    { id: "1", number: 1000, category: "Students Trained", duration: 3 },
    { id: "2", number: 5, category: "Expert Trained", duration: 10 },
    { id: "3", number: 1000, category: "Careers Launched", duration: 3 },
  ];
  return (
    <div className="academyKeyMetrics-container">
      {metric.map((x) => (
        <div className="academyKeyMetrics-content" key={x.id}>
          <CountUp start={0} end={x.number} duration={x.duration} suffix="+" />
          <h3>{x.category}</h3>
        </div>
      ))}
    </div>
  );
};

export default AcademyKeyMetrics;
