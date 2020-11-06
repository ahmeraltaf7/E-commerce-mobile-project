import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const Details = () => {
  const { detailProduct, addToCart } = useContext(GlobalContext);

  const { id, title, img, price, company, info, inCart } = detailProduct;

  return (
    <div className="container my-5">
      <h1 className="display-4 text-capitalize text-center">{title}</h1>
      <div className="row my-5">
        <div className="col-10 col-md-6 mx-auto">
          <img src={img} alt="product" className="img-fluid" />
        </div>
        <div className="col-10 col-md-6 mx-auto">
          <h1 className="font-weight-bold">Modal: {title}</h1>
          <h3 className="text-capitalize">made by: {company}</h3>
          <h3 className="text-success">Price: ${price}</h3>
          <p className="mt-4">Info About Phone:</p>
          <p>{info}</p>
          <div className="mt-3">
            <Link to="/">
              <button className="btn btn-outline-light mr-4">
                Back to products
              </button>
            </Link>
            <button
              className="btn btn-outline-warning"
              disabled={inCart ? true : false}
              onClick={() => addToCart(id)}
            >
              {inCart ? (
                <p className="text-capitalize mb-0">in cart</p>
              ) : (
                <p className="text-capitalize mb-0">add cart</p>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
