import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { storeProducts, detailProduct } from "../data";

const store = {
  products: storeProducts,
  detailProduct,
  cart: [],
  modalProduct: [],
  count: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

//create Context

export const GlobalContext = createContext(store);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, store);

  //Actions
  //show details of specific product you click
  const showDetail = (id) => {
    dispatch({
      type: "SHOW_DETAIL",
      payload: id,
    });
  };
  //Product ADD to cart
  const addToCart = (id) => {
    dispatch({
      type: "ADD_CART",
      payload: id,
    });
  };
  //Product ADD TO MODAL
  const addToModal = (id) => {
    dispatch({
      type: "ADD_MODAL",
      payload: id,
    });
  };
  //Remove specific item from cart
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  //Increase Item in cart
  const increaseItem = (id) => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: id,
    });
  };
  //Decrease Item in cart
  const decreaseItem = (count, id) => {
    dispatch({
      type: "DECREASE_ITEM",
      payload: { count, id },
    });
  };
  //Get the totals of all products
  const getTotals = () => {
    dispatch({
      type: "GET_TOTALS",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        showDetail,
        addToCart,
        addToModal,
        removeItem,
        increaseItem,
        decreaseItem,
        getTotals,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
