import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faGift,
  faHome,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarDataType {
  icon: JSX.Element;
  link: string;
}

const NavbarData: NavbarDataType[] = [
  {
    icon: <FontAwesomeIcon icon={faHome} className="icon" />,
    link: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} className="icon" />,
    link: "/questlist",
  },
  {
    icon: <FontAwesomeIcon icon={faClipboardList} className="icon" />,
    link: "/projectlist",
  },
  {
    icon: <FontAwesomeIcon icon={faGift} className="icon" />,
    link: "/rewards",
  },
  {
    icon: <FontAwesomeIcon icon={faUserCircle} className="icon" />,
    link: "/user",
  },
];

export default NavbarData;
