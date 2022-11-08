import React from "react";
import { Link, useLocation, Location } from "react-router-dom";
import { TMenuLink } from "./types";
import "./style.css";

export const MenuLink: React.FC<TMenuLink> = ({ to, children }) => {
  const location: Location = useLocation();
  const checkLocation: string =
    location.pathname === to ? "menuLink-active" : "";

  return (
    <Link to={to} className={`menuLink ${checkLocation}`}>
      {children}
    </Link>
  );
};
