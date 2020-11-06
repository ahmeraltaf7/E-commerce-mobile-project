import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const Moodal = (props) => {
  const { modalProduct } = useContext(GlobalContext);
  const { img, title, price } = modalProduct;

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="mx-auto text-dark font-weight-bold"
          >
            Your Item Is Added To The Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt="product" className="p-4 mx-auto" height="400"/>
          <h3 className="text-dark font-weight-bold">Modal: {title}</h3>
          <h4 className="text-muted">Price: ${price}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="outline-success">Continue Shoping</Button>
           <Link to="/cart">
          <button className="btn btn-outline-dark">Go to cart</button>
           </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Moodal;
