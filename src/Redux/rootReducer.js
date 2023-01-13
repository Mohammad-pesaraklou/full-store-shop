import { combineReducers } from "redux";
import ProductReducer from "./Product/ProductReducer";
import cartReducer from "./cart/CartReducer";
const rootReducer = combineReducers({
    productState: ProductReducer,
    cartState: cartReducer,
})

export default rootReducer;