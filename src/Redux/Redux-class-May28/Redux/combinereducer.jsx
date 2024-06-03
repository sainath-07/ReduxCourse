import { combineReducers } from "redux";
import {profileReducer} from "./reducer"
import { reducerBookFunction } from "../../Redux-Classes-May27/Redux/reducer";


// combineReducer is a method which allow to combine all the reducer functions into single reducer

export const singleReducer=combineReducers({
    profile : profileReducer,
    bookcount : reducerBookFunction
})