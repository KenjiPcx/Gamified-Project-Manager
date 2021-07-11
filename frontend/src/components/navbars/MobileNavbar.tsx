import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarData from "./NavbarData";

function MobileNavbar() {
  let location = useLocation().pathname;

  return (
    <div className="mobile-navbar">
      {NavbarData.map((navbarItem, key) => {
        return (
          <Link
            to={navbarItem.link}
            key={key}
            className={`nav-link ${location === navbarItem.link ? "selected" : ""}`}
          >
            {navbarItem.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default MobileNavbar;
