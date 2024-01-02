import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Dropdown({ submenus, showMenu, positionRight }) {
  return (
    <div
      className={`dropdown ${showMenu ? "" : "hideMenu"} ${
        positionRight ? "right" : ""
      }`}
    >
      {submenus.map((submenu, index) =>
        submenu.title === "Court Appointed Family Defense" ||
        submenu.title === "Prevention Services" ? (
          <div key={index} className="menu-items">
            <p>{submenu.title}</p>
          </div>
        ) : submenu.submenuHash ? (
          <div key={index} className="menu-items">
            <NavHashLink to={`${submenu.url}${submenu.urlHash}`}>
              {submenu.title}
            </NavHashLink>
          </div>
        ) : (
          <div key={index} className="menu-items">
            <NavLink to={submenu.url}>{submenu.title}</NavLink>
          </div>
        )
      )}
    </div>
  );
}
