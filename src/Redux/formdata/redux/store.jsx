import { legacy_createStore } from "redux";
import { formactionReducer } from "./reducer";

const formstore=legacy_createStore(formactionReducer)


export default formstore