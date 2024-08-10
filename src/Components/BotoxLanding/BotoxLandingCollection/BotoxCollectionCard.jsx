import React from "react";
import "./BotoxLandingCollection.css";
import { Link } from "react-router-dom";

const BotoxCollectionCard = () => {
  return (
    <div className="botoxCollectionCard">
      <div
        className="botoxCollectionCardContent"
        id="botoxCollectionCardContent1"
      >
        <img
          src="https://img.freepik.com/free-photo/medium-shot-young-woman-with-curly-hair_23-2151317419.jpg?t=st=1723100865~exp=1723104465~hmac=af4255c3c6b5a6e1b2cc0f275f95f1d891fec408ab698eb6999b122df4b677e5&w=996"
          alt=""
        />
      </div>
      <div
        className="botoxCollectionCardContent"
        id="botoxCollectionCardContent2"
      >
        <div className="botoxCollectionCardItem">
          <h3>1</h3>
        </div>
        <h2>Botox</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          accusantium at ratione
        </p>
      </div>
      <div
        className="botoxCollectionCardContent"
        id="botoxCollectionCardContent3"
      >
        <button><Link className="botoxCollectionLink" to={"/"}>View More</Link></button>
      </div>
    </div>
  );
};

export default BotoxCollectionCard;
