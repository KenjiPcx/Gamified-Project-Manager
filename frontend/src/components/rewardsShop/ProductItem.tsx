import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

interface ProductItemProps {
  name: string;
  duration?: string;
  price: number;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

function ProductItem({
  name,
  duration,
  price,
  balance,
  setBalance,
}: ProductItemProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="product" onClick={handleShow}>
      <div className="name">{name}</div>
      {duration ? <div className="duration">{duration}</div> : ""}
      <div className="price">{price}G</div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-row">
            <div className="test">You have chosen:</div> {name}
          </div>
          {duration ? (
            <div className="duration">
              <div className="label">Duration is:</div> {duration}
            </div>
          ) : (
            ""
          )}
          <div className="modal-row">
            <div className="label">Price is: </div>
            {price}
          </div>
          <div className="modal-row">
            <div className="label">Current Balance:</div>
            {balance}
          </div>
          <div className="modal-row">
            <div className="label">Balance after transaction:</div>
            {balance - price}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="close-btn" onClick={handleClose}>
            Close
          </div>
          <div className="accept-btn" onClick={handleClose}>
            Save Changes
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductItem;
