import { ADD_PRODUCT, TURN_PRODUCT, RETURN_PRODUCT, TURN_WITH_QUANTITY } from "./actionTypes";
import initialState from "./initialState.js";

const nextId = (products) => {
  const maxId = products.reduce((maxId, product) => {
    if (product.id) {
      return Math.max(maxId, product.id);
    }
    return Math.max(maxId, 0);
  }, -1);
  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: nextId(state),
          productName: action.payload.productName,
          productCategory: action.payload.productCategory,
          imageURI: action.payload.imageURI,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    
    case RETURN_PRODUCT:
      return state.map(product => {
        if(product.id === action.payload) {
          return{
            ...product,
            quantity: Number(product.quantity) + 1
          }
        }
        return product;
      })

    case TURN_PRODUCT:
      return state.map(product => {
        if(product.id === action.payload && product.quantity > 0) {
          return {
            ...product, 
            quantity: Number(product.quantity) - 1
          }
        }
        return product;
      })

    case TURN_WITH_QUANTITY:
      return state.map(product => {
        if(product.id === action.payload.id) {
          return {
            ...product,
            quantity: Number(product.quantity) + action.payload.quantity,
          }
        }
        return product;
      })

    default:
      return state;
  }
};

export default productReducer;
