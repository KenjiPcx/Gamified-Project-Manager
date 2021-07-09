import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface BackHeaderProps {
  pageTitle: string;
  prevPageLink: string;
}

function BackHeader({ pageTitle, prevPageLink }: BackHeaderProps) {
  return (
    <div className="header">
      <Link to={prevPageLink} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="label label-sm">{pageTitle}</div>
    </div>
  );
}

export default BackHeader;
