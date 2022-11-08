import React from "react";
import "./styles.css";
import { TCard } from "./types";

const Card: React.FC<TCard> = ({card}) => {
  return (
    <div className="card">
      <img
        src={card.image}
        alt={card.name}
      />
      <div>
        <h2 className="name">{card.name}</h2>
        <span>
          <p>{card.species}</p>
          <p>{card.gender}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
