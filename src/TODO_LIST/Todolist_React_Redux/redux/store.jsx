import { legacy_createStore } from "redux";
import { reducerfunction } from "./reducer";

export const todoStore = legacy_createStore(reducerfunction);
