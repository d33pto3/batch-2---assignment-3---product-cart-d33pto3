import { ADD_PRODUCT, TURN_PRODUCT, RETURN_PRODUCT, TURN_WITH_QUANTITY } from "./actionTypes";

export const addProduct = (productInfo) => {
  const { productName, productCategory, imageURI, price, quantity } =
    productInfo;
  return {
    type: ADD_PRODUCT,
    payload: {
      productName,
      productCategory,
      imageURI,
      price,
      quantity,
    },
  };
};

export const turnProduct = (id) => {
  return {
    type: TURN_PRODUCT,
    payload: id,
  };
};

export const returnProduct = (id) => {
  return {
    type: RETURN_PRODUCT,
    payload: id,
  };
};

export const turnProductWithQuantity = (id, quantity) => {
  return {
    type: TURN_WITH_QUANTITY,
    payload: {
      id,
      quantity,
    }
  }
}
