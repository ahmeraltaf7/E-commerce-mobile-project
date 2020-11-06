import CartItem from "../Components/Cart/CartItem/CartItem";
import { storeProducts } from "../data";

export default (state, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        ...state,
        detailProduct: state.products.find(
          (product) => product.id === action.payload
        ),
      };

    case "ADD_CART":
      let product = state.products.find(
        (product) => product.id === action.payload
      );
      product.count = 1;
      const price = product.price;
      product.total = price;
      product.inCart = true;

      return {
        ...state,
        cart: [...state.cart, product],
      };

    case "ADD_MODAL":
      return {
        ...state,
        modalProduct: state.products.find(
          (product) => product.id === action.payload
        ),
      };

    case "REMOVE_ITEM":
      let tempProducts = [...state.products];
      let tempCart = [...state.cart];
      tempCart = tempCart.filter((item) => item.id !== action.payload);
      const index = tempProducts.indexOf(
        state.products.find((product) => product.id === action.payload)
      );
      let removedProduct = tempProducts[index];
      removedProduct.count = 0;
      removedProduct.total = 0;
      removedProduct.inCart = false;
      return {
        ...state,
        cart: [...tempCart],
        products: [...tempProducts],
      };

    case "INCREASE_ITEM":
      let copyCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem = { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: copyCart,
      };

    case "DECREASE_ITEM":
      let tempCartt = [];
      if (action.payload.count === 1) {
        tempCartt = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCartt = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, count: cartItem.count - 1 };
          }
          return cartItem;
        });
      }
      return {
        ...state,
        cart: tempCartt,
      };

    case "GET_TOTALS":
      let { total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const itemTotal = price * count;

          cartTotal.total += itemTotal;

          return cartTotal;
        },
        { total: 0 }
      );
      total = parseFloat(total.toFixed(2));
      const tax = parseFloat((total * 0.1).toFixed(2));
      return {
        ...state,
        cartSubTotal: total,
        cartTax: tax,
        cartTotal: total + tax,
      };

    default:
      return state;
  }
};
