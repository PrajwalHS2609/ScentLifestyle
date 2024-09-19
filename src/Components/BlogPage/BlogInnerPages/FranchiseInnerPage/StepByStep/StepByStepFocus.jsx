import React from "react";
import checked from "./../../../../../Images/checked.png";

const StepByStepFocus = () => {
  return (
    <div className="pediManicureWhat">
      <h5>8. Focus on Customer Experience</h5>
      <p>
        Customer experience is the key to building a successful salon franchise.
        Clients return to salons where they feel valued and pampered, so
        prioritize delivering excellent service and creating a memorable
        experience.
      </p>
      <ul>
        <h4>Enhancing Customer Experience:</h4>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Personalized Services:{" "}
          </span>
          <p>
            Tailor your services to meet individual client needs, and make them
            feel special by remembering their preferences.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Timely Appointments:{" "}
          </span>
          <p>
            Ensure that Appointments run smoothly, with minimal wait times, to
            provide a seamless experience.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Follow-Up:{" "}
          </span>
          <p>
            After each visit, follow up with clients to gather feedback and show
            that you value their opinion.{" "}
          </p>
        </li>

        <p>
          By offering top-notch customer service and personalized attention,
          your salon franchise will gain a reputation for excellence,
          encouraging repeat business and positive reviews.
        </p>
      </ul>

      <br />
    </div>
  );
};

export default StepByStepFocus;
