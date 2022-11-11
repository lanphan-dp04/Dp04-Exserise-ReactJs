import { combineReducers } from "redux";
import { dataReducers } from "./apiReducers";

export const reducers = combineReducers( {
  allProducts : dataReducers,
})