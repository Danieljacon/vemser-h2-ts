import React from "react";
import "./styles.css";
import { MenuLink } from "../MenuLink";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="menu-container">
        <li>
          <MenuLink to={"/"}>Home</MenuLink>
        </li>
        <li>
          <MenuLink to={"/episodes"}>Episodes</MenuLink>
        </li>
      </ul>
    </header>
  );
};
