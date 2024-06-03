import { combineReducers } from "redux";
import { httpcallreducer } from "./reducer";
import { cartReducer } from "./Cart/reducer";

export const singleReducerhttp=combineReducers({
    products : httpcallreducer,
    cart :cartReducer
})