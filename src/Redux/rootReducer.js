import { combineReducers } from "redux";
import ProductReducer from "./Product/ProductReducer";
import cartReducer from "./cart/CartReducer";
import AccountReducer from "./Account/AccountReducer";
const rootReducer = combineReducers({
    productState: ProductReducer,
    cartState: cartReducer,
    AccountState: AccountReducer
})

export default rootReducer;