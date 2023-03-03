import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
