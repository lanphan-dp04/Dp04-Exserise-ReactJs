import { ActionTypes } from "../contans/action-types"

export const setProducts = (data) => {
  return {
    type: ActionTypes.CALL_API,
    payload: data,
  }
}