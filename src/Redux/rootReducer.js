import { combineReducers } from "redux";
import ProductReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
    productState: ProductReducer
})

export default rootReducer;