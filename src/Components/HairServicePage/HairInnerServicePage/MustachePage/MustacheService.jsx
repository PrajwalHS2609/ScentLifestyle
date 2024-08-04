import React from "react";
import InnerCard from "../../../InnerServicePage/InnerCard/InnerCard";

const MustacheService = () => {
  return (
    <div className="hairSpaServiceContainer">
      <h2>Services Offered at SCENT's Mustache Salon in Bangalore</h2>
      <p>
        At SCENT, we offer a comprehensive range of mustache grooming services
        designed to cater to your specific needs. Our Mustache Styling in
        Bangalore services include:
      </p>
      <div className="hairSpaServiceContent">
        <InnerCard
          head="Mustache Trimming:"
          para=" Our expert stylists will carefully trim your mustache to ensure a neat and polished look. We take into consideration your desired length and shape, creating a style that suits your face and personal style."
        />
        <InnerCard
          head="Mustache Shaping:"
          para="Our stylists use precise techniques to shape your mustache, accentuating your features for a balanced look. Whether you prefer a full or refined style, we’ll achieve the perfect shape for you."
        />
        <InnerCard
          head="Mustache Defining: "
          para=" Defining your mustache involves outlining and detailing the edges to create a sharp and clean appearance. Our stylists use specialized tools to define your mustache, giving it a crisp and well-groomed finish."
        />
        <InnerCard
          head="Mustache Maintenance: "
          para="Regular maintenance is essential for keeping your mustache looking its best. Our stylists provide valuable tips and advice on how to care for your mustache, including grooming techniques and product recommendations."
        />
        <InnerCard
          head="Custom Mustache Styling :"
          para=" At SCENT, we offer personalized mustache styling to match your unique style. Visit our Mustache Salon in Bangalore for a look that's classic or contemporary, tailored just for you."
        />
      </div>
    </div>
  );
};

export default MustacheService;
