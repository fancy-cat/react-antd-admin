import { combineReducers } from 'redux'
import { visibilityFilter, todos } from './todo'
import { userInfo } from './user'

const reducers = combineReducers({
  visibilityFilter,
  todos,
  userInfo
})
export default reducers