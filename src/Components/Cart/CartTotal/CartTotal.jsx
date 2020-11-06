import React, { useContext, useEffect } from "react";
import "./CartTotal.scss";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalState";

const CartTotal = () => {
  const { cartSubTotal, cartTax, cartTotal, cart, getTotals } = useContext(GlobalContext);
  useEffect(() => {
  getTotals()
}, [cart])

  // const amount = cart.map((cart) => cart.total);
  // const subTotal = amount.reduce((acc, crr) => (acc += crr), 0);
  // const tax = parseFloat((subTotal * 0.1).toFixed(2));
  // const total = subTotal + tax;

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-10 col-md-2 offset-md-10 text-right text-capitalize">
            <h5 className="my-2">subtotal: $ {cartSubTotal}</h5>
            <h5 className="my-2">tax: $ {cartTax}</h5>
            <h5 className="my-2">total: $ {cartTotal}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
