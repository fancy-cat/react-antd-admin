import { SET_USER_INFO } from "../action"
export function userInfo(state = {}, action) {
  switch(action.type) {
    case SET_USER_INFO:
      return {...state, ...action.obj}
    default:
      return state
  }
}
