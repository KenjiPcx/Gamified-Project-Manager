import React from 'react'
import { faClipboardList, faGift, faHome, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MobileNavbar() {
    return (
      <div className="mobile-navbar">
        <FontAwesomeIcon icon={faHome} className="icon" />
        <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
        <FontAwesomeIcon icon={faClipboardList} className="icon" />
        <FontAwesomeIcon icon={faGift} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
    );
}

export default MobileNavbar
