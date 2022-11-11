import { ActionTypes } from "../contans/action-types";

const initialState = {
  data: [],
}
export const dataReducers = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.CALL_API :
      return {...state,data : action.payload};
    default: 
      return state;
  }
}