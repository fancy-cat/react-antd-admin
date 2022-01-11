import { addTodo, toggleTodo, VisibilityFilters } from '../store/action'
import { connect } from 'react-redux'
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.map(v => v.completed)
    case SHOW_ACTIVE:
      return todos.map(v => !v.completed)
  }
}
// 类似于vue的计算属性，但是是通过connect的方式，以props的形式注入
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: index => {
      dispatch(toggleTodo(index))
    },
    onAddClick: text => {
      dispatch(addTodo(text))
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

const Todo = ({onClick, completed, text}) => (
  <li onClick={onClick} style={{'textDecoration' : completed ? 'line-through' : 'none'}}>{text}</li>
)

function TodoList({todos,onTodoClick,onAddClick}) {
  let input
  return (
    <div>
      <h1>to do list</h1>
      <ul>
        {
          todos.map((item,index) => <Todo key={index} completed={item.completed} text={item.text} onClick={() => onTodoClick(index)}/>)
        }
      </ul>
      <input ref={node => input = node}></input>
      <button onClick={() => onAddClick(input.value)}>Add todo</button>
    </div>
  )
}
export default VisibleTodoList