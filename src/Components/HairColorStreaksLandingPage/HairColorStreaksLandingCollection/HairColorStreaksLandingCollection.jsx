import React from "react";
import HairTreatmentLandingCollectionCard from "../../HairTreatmentLandingPage/HairTreatmentLandingCollection/HairTreatmentLandingCollectionCard";
import "./HairColorStreaksLandingCollection.css"

const HairColorStreaksLandingCollection = () => {
  return (
    <div className="hairColorStreakLandingCollection">
      <div className="hairColorStreakCollectionWrapper">
        <div className="hairColorStreakCollectionHead">
          <h2>Featured Collections</h2>
          <p>
            Our Solutions tailor made for with each individual to understand
            specific needs
          </p>
        </div>
        <div className="hairColorStreakCollectionContent">
          <HairTreatmentLandingCollectionCard />
          <HairTreatmentLandingCollectionCard />
          <HairTreatmentLandingCollectionCard />
        </div>
      </div>
    </div>
  );
};

export default HairColorStreaksLandingCollection;
