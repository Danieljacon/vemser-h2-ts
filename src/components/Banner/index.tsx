import React from "react";
import "./styles.css";

type TBanner = {
  title: string;
  description: string;
  image: string;
};

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
