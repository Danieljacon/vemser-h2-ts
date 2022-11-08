import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link, useLocation, Location } from "react-router-dom";
import "./style.css";

type TMenuLink = {
  to: string;
  children: React.ReactNode;
};

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