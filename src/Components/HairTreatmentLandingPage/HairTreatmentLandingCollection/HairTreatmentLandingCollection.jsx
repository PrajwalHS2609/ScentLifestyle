import React from "react";
import "./HairTreatmentLandingCollection.css";
import HairTreatmentLandingCollectionCard from "./HairTreatmentLandingCollectionCard";
const HairTreatmentLandingCollection = () => {
  return (
    <div className="hairTreatmentLandingCollection">
      <div className="hairTreatmentCollectionWrapper">
        <div className="hairTreatmentCollectionHead">
          <h2>Featured Collections</h2>
          <p>
            Our Solutions tailor made for with each individual to understand
            specific needs
          </p>
        </div>
        <div className="hairTreatmentCollectionContent">
          <HairTreatmentLandingCollectionCard />
          <HairTreatmentLandingCollectionCard />
          <HairTreatmentLandingCollectionCard />
        </div>
      </div>
    </div>
  );
};

export default HairTreatmentLandingCollection;
