import React, { useContext } from "react";
import "./CartItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../../Context/GlobalState";

const CartItem = ({ item }) => {
  const { removeItem, decreaseItem, increaseItem } = useContext(GlobalContext);

  const { id, title, img, price, total, count } = item;

  return (
    <div className="row text-capitalize text-center">
      <div className="col-md-2 col-10 mx-auto">
        <img src={img} alt="product" className="img-fluid img" />
      </div>
      <div className="col-md-2 col-10 mx-auto pt-lg-5">
        <span className="d-lg-none mt-5">product: </span>
        {title}
      </div>
      <div className="col-md-2 col-10 mx-auto pt-lg-5">
        <span className="d-lg-none mt-5">price: </span>${price}
      </div>
      <div className="col-md-2 col-10 mx-auto pt-lg-5">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-outline-dark mr-3 btn-count" onClick= {()=> decreaseItem(count,id)}>-</span>
          </div>
          <div>
            <span className="btn btn-info mr-3 btn-count">{count}</span>
          </div>
          <div>
            <span className="btn btn-outline-dark btn-count" onClick={()=> increaseItem(id)}>+</span>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-10 mx-auto pt-lg-5 text-danger">
        <FontAwesomeIcon icon={faTrash} size="2x" className="icon" onClick={()=>removeItem(id)}/>
      </div>
      <div className="col-md-2 col-10 mx-auto pt-lg-5 total">
        <span className="d-lg-none mt-3">Total price: </span>$ {total}
      </div>
    </div>
  );
};

export default CartItem;
