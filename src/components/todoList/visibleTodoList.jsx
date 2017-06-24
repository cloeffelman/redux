import React, {Component} from 'react'

import {TodoList} from '../todoList/todoList'

class VisibleTodoList extends Component {
  constructor(props){
    super(props)
    this.toggleTodo = this.toggleTodo.bind(this)
  }
  componentDidMount(){
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  toggleTodo(id){
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  render(){
    const props = this.props
    const state = this.props.store.getState()
    const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter)
    return(
      <TodoList
        todos={visibleTodos}
        onTodoClick={id => this.toggleTodo(id)}
        visibilityFilter={state.visibilityFilter}/>
    )
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

export default VisibleTodoList
