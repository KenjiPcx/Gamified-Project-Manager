import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faArrowLeft,
  faCheck
} from "@fortawesome/free-solid-svg-icons";


interface BackHeaderWithEditProps {
  pageTitle: string;
  prevPageLink: string;
  showEdit: boolean;
  edit: () => void;
}

function BackHeaderWithEdit({ pageTitle, prevPageLink, showEdit, edit }: BackHeaderWithEditProps) {
  return (
    <div className="header">
      <Link to={prevPageLink} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="label label-sm">{pageTitle}</div>
      {showEdit ? (
        <div className="btn check-btn" onClick={edit}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      ) : (
        <div className="btn update-btn" onClick={edit}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
      )}
    </div>
  );
}

export default BackHeaderWithEdit;
