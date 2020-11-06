import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Title from "../Title/Title";
import CartColumn from "./CartColumn/CartColumn";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import EmptyCart from "./EmptyCart/EmptyCart";

const Cart = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <section className="my-3">
      {cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumn />
          <CartList cart={cart} />
          <CartTotal />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
