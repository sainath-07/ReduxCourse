import { legacy_createStore } from "redux";
import reducercounterfunction from "./reducer";

const counterStore=legacy_createStore(reducercounterfunction)

export default counterStore