import React from "react";
import hairColor from "./../../Images/hair colour.jpg";

const AboutMarket = () => {
  return (
    <div className="aboutOwner-container">
      <img src={hairColor} alt="hair Color Img" />
      <div className="aboutOwner-content">
        <h2>
          Salon Industry <span> Market</span> Trends
        </h2>
        <ul>
          <li>
            <h4> rising demand for professional grooming services</h4>
            <p>
              The demand for expert grooming sessions is increasing due to
              rising incomes and heightened interest in personal grooming and
              global fashion trends{" "}
            </p>
          </li>
          <li>
            <h4>growth of mens grooming </h4>
            <p>
              The men's grooming market in India is expanding rapidly, driven by
              increased awareness of self-care and personal style. Services like
              pedicures, manicures, and beard styling are gaining popularity.
              The market is expected to grow at a CAGR of 10-12%, reaching
              ₹20,000 crore in the coming years
            </p>
          </li>
          <li>
            <h4>expansion of premium brands </h4>
            <p>
              the salon industry is rapidly growing through chainsalons and
              franchisee models in metros and also tier 2 cities{" "}
            </p>
          </li>
          <li>
            <h4>technological advances </h4>
            <p>
              Technology is transforming the salon industry with AI-driven skin
              analysis tools, automated appointment booking systems, and mobile
              apps enhancing customer experience sustainable and organic beauty
              trends{" "}
            </p>
          </li>
          <li>
            <h4> sustainable and organic beauty trends</h4>
            <p>
              Consumers are increasingly conscious about using organic and
              sustainable beauty products, leading to a rise in eco-friendly
              salon practices{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMarket;
