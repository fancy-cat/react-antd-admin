import { createStore } from 'redux'
import todoApp from "./reducers/todo.js";

let store = createStore(todoApp)

export default store