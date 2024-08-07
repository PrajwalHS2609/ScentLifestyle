import React from "react";
import checked from "./../../../../Images/checked.png";

const BeardWhy = () => {
  return (
    <div className="headSpaWhyContainer">
      <h5>Why Choose SCENT for Beard Stylist in Bangalore?</h5>
      <p>
        Choosing SCENT for your beard grooming needs means opting for excellence
        in every aspect of your grooming journey. Our commitment to delivering
        superior service and outstanding results has made us a trusted name in
        the industry. Here’s why clients love SCENT:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Experienced Professionals:{" "}
          </span>
          <p>
            Our team of skilled Beard Stylist in Bangalore bring a wealth of
            experience and expertise to every service. They are dedicated to
            helping you achieve your desired look with precision and style.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Customized Solutions:
          </span>
          <p>
            We understand that every client's grooming needs are unique. Our
            personalized approach ensures that you receive the perfect treatment
            tailored to your individual style and preferences.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Focus on Quality:{" "}
          </span>
          <p>
            We prioritize the health and well-being of your beard. Our
            treatments are designed to nourish, protect, and enhance the natural
            beauty of your beard, ensuring long-lasting results.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Convenient Location:{" "}
          </span>
          <p>
            Located in the heart of Bangalore, SCENT is easily accessible,
            making it convenient for clients to visit us for their grooming
            needs.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Comprehensive Hair Care:{" "}
          </span>
          <p>
            In addition to our hair spa services, we offer a wide range of hair
            care treatments, including haircuts, coloring, styling, and more.
            SCENT is your one-stop destination for all your hair care needs.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BeardWhy;
