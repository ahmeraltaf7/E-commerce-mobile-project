import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Product.scss";
import { GlobalContext } from "../../../Context/GlobalState";
import PropTypes from "prop-types";
import Moodal from "../../Modal/Modal";

const Product = ({ products }) => {
  const { showDetail, addToCart, addToModal } = useContext(GlobalContext);
  const [modalShow, setModalShow] = useState(false);

  const { id, title, img, price, inCart } = products;

  return (
    <>
      <div className="col-8 col-md-4 col-lg-3  mx-auto">
        <div className="card border-primary my-5">
          <Link to="/details">
            <img
              src={img}
              className="card-img-top img-fluid p-5"
              alt="product"
              onClick={() => showDetail(id)}
            />
          </Link>
          <button
            className="btn btn-outline-primary mt-2"
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id);
              setModalShow(true);
              addToModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0">Item is in the cart</p>
            ) : (
              <p className="text-capitalize mb-0">
                add to cart <FontAwesomeIcon icon={faCartPlus} />
              </p>
            )}
          </button>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center text-dark font-weight-bold">
              {title}
            </p>
            <h5 className="text-blue">$ {price}</h5>
          </div>
        </div>
      </div>
      <Moodal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

Product.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
