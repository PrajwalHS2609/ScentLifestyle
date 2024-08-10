import React from "react";
import "./BotoxLandingCollection.css";
import BotoxCollectionCard from "./BotoxCollectionCard";
const BotoxLandingCollection = () => {
  return (
    <div className="botoxLandingCollection">
      <div className="botoxCollectionWrapper">
        <div className="botoxCollectionHead">
          <h2>Featured Collections</h2>
          <p>
            Our Solutions tailor made for with each individual to understand
            specific needs
          </p>
        </div>
        <div className="botoxCollectionContent">
          <BotoxCollectionCard />
          <BotoxCollectionCard />
          <BotoxCollectionCard />
        </div>
      </div>
    </div>
  );
};

export default BotoxLandingCollection;
