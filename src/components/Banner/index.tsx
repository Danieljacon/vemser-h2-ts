import React from "react";
import "./styles.css";
import { TBanner } from "./types";

export const Banner: React.FC<TBanner> = ({ title, description, image }) => {
  return (
    <div className="container">
      <div className="banner-container">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
