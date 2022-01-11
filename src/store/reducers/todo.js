import { combineReducers } from 'redux'
import { 
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
 } from "../action";

const { SHOW_ALL } = VisibilityFilters
// 将不同功能的reducer拆分
// todos功能
function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {
          return {...todo, ...{completed: !todo.completed}}
        }
        return todo
      })
    default:
      return state
  }
}
// visibility功能
function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// 纯函数 根据action指令 修改state
// 主 reducer 并不需要设置初始化时完整的 state。初始时，如果传入 undefined, 子 reducer 将负责返回它们的默认值
// function todoApp(state = {} , action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

// 将上面部分改写
// combineReducers() 所做的只是生成一个函数  调用各个reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

