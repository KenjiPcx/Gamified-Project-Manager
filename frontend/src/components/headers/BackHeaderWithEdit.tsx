import React from "react";
import { Link } from "react-router-dom";

interface BackHeaderWithEditProps {
  pageTitle: string;
  prevPageLink: string;
  edit: () => void;
}

function BackHeaderWithEdit({ pageTitle, prevPageLink, edit }: BackHeaderWithEditProps) {
  return (
    <div className="header">
      <Link to={prevPageLink} className="back-btn">
        Back
      </Link>
      <div className="label label-sm">{pageTitle}</div>
      <div className="update-btn">Edit</div>
    </div>
  );
}

export default BackHeaderWithEdit;
