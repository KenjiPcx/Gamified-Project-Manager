import React from "react";
import { Link } from "react-router-dom";

interface BackHeaderProps {
  pageTitle: string;
  prevPageLink: string;
}

function BackHeader({ pageTitle, prevPageLink }: BackHeaderProps) {
  return (
    <div className="header">
      <Link to={prevPageLink} className="back-btn">
        Back
      </Link>
      <div className="label label-sm">{pageTitle}</div>
    </div>
  );
}

export default BackHeader;
