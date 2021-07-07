import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faClipboardList,
  faGift,
  faHome,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarData from "./NavbarData";

function MobileNavbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mobile-navbar">
      {NavbarData.map((navbarItem, key) => {
        return (
          <Link
            to={navbarItem.link}
            key={key}
            className={`nav-link ${selected === key ? "selected" : ""}`}
            onClick={() => setSelected(key)}
          >
            {navbarItem.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default MobileNavbar;
