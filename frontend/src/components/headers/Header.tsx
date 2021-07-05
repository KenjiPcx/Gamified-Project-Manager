import React from "react";
import { Form, Button } from "react-bootstrap";

interface HeaderProps {
  pageTitle: string;
  search: boolean;
  types: string[];
  back: boolean;
}

function Header({ pageTitle, search, types, back }: HeaderProps) {
  return (
    <div className="header">
      {back ? <Button className="back-btn">Back</Button> : ""}
      <div className="label">{pageTitle}</div>
      {search ? (
        <Form className="searchbar">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search"
              className="search-text"
            />
            <Form.Control as="select" className="search-type">
              {types.map((type) => {
                return <option>{type}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
