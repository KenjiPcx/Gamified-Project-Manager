import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

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
  const updateGoldURL = `http://localhost:5000/user/updateGold`;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleConfirm = () => {
    let newBalance = balance - price;
    axios
      .patch(updateGoldURL, { wallet: { gold: newBalance } })
      .then(() => {
        setBalance(newBalance);
        handleClose();
      })
      .catch(console.log);
  };

  return (
    <>
      <div className="product" onClick={handleShow}>
        <div className="name">{name}</div>
        {duration ? <div className="duration">{duration}</div> : ""}
        <div className="price">{price}G</div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="item modal-row">
            <div className="label">Item:</div>
            <div className="value">{name}</div>
          </div>
          {duration ? (
            <div className="duration modal-row">
              <div className="label">Duration:</div>{" "}
              <div className="value">{duration}</div>
            </div>
          ) : (
            ""
          )}
          <div className="price modal-row">
            <div className="label">Price: </div>
            <div className="value">{price}</div>
          </div>
          <div className="balance modal-row">
            <div className="label">Balance:</div>
            {`${balance} -> ${balance - price}`}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="custom-btn close-btn" onClick={handleClose}>
            Cancel
          </div>
          <Button className="custom-btn confirm-btn" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductItem;
