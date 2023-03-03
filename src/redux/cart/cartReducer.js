import initialState from "../products/initialState";
import {
  ADD_ITEM,
  DELETE_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
} from "./actionTypes";

const nextId = (products) => {
  const maxId = products.reduce((maxId, product) => {
    if (product.id) {
      return Math.max(maxId, product.id);
    }
    return Math.max(maxId, 0);
  }, -1);
  return maxId + 1;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productName, productCategory, imageURI, price} = action.payload;
        return [
          ...state,
        {
            id: nextId(state),
            productName,
            productCategory,
            imageURI,
            price,
            quantity: 0,
        }]

    case ADD_ITEM:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

    case REMOVE_ITEM:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
