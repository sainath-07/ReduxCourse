import { combineReducers } from "redux";
import { httpcallreducer } from "./reducer";

export const singleReducerhttp=combineReducers({
    products : httpcallreducer
})