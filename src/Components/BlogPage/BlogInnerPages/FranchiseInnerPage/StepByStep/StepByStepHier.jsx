import React from "react";
import checked from "./../../../../../Images/checked.png";

const StepByStepHier = () => {
  return (
    <div className="pediManicureWhat">
      <h5>6. Hire and Train a Skilled Team</h5>
      <p>
        Your staff is the backbone of your salon franchise, and their skills,
        professionalism, and customer service will directly impact your
        business's success. Hiring the right team and providing ongoing training
        are essential to delivering the high-quality services that clients
        expect.
      </p>
      <ul>
        <h4>Key Hiring Considerations:</h4>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Skilled Technicians:{" "}
          </span>
          <p>
            Hire experienced hairstylists, beauticians, and nail technicians who
            are proficient in the latest techniques and trends.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Customer Service:{" "}
          </span>
          <p>
            Your team should be trained to provide exceptional customer service
            and create a welcoming atmosphere for clients.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Training Programs:{" "}
          </span>
          <p>
            Ensure that your franchise offers ongoing training to keep your
            staff updated on the latest industry trends and best practices.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Employee Retention:{" "}
          </span>
          <p>
            Foster a positive work environment to retain skilled employees and
            reduce turnover.
          </p>
        </li>
        <p>
          By investing in your team, you’ll build a loyal customer base and
          establish your salon as a top choice in Bangalore.
        </p>
      </ul>

      <br />
    </div>
  );
};

export default StepByStepHier;
