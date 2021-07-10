import React from "react";
import { Form, Button } from "react-bootstrap";

interface HeaderProps {
  pageTitle: string;
}

function Header({ pageTitle }: HeaderProps) {
  return (
    <div className="header">
      <div className="label-only">{pageTitle}</div>
    </div>
  );
}

export default Header;
