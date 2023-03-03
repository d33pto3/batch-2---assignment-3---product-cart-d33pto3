import {
  ADD_ITEM,
  ADD_TO_CART,
  DELETE_PRODUCT,
  REMOVE_ITEM,
} from "./actionTypes";

export const addToCart = (productInfo) => {
  const { id, productName, productCategory, imageURI, price, quantity } =
    productInfo;
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      productName,
      productCategory,
      imageURI,
      price,
      quantity,
    },
  };
};

export const addItem = (id) => {
  return {
    type: ADD_ITEM,
    payload: id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
