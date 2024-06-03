import { legacy_createStore } from "redux";
import { profileReducer } from "./reducer";

export const ProfileStore=legacy_createStore(profileReducer)