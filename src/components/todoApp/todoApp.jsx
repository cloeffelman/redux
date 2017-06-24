import React, {Component} from 'react'

import {TodoList} from '../todoList/todoList'
import {AddTodo} from '../addTodo/addTodo'
import {Footer} from '../footer/footer'

require('./todo-app.scss')

let nextTodoId = 0
class TodoApp extends Component {
  constructor(props){
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }
  addTodo(value){
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: value,
      id: nextTodoId++
    })
  }
  toggleTodo(id){
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  setFilter(filter){
    this.props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  }
  render(){
    return(
      <div id="todo-app">
        <AddTodo onAddClick={value => this.addTodo(value)}/>
        <TodoList
          todos={this.props.todos}
          onTodoClick={id => this.toggleTodo(id)}
          visibilityFilter={this.props.visibilityFilter}/>
        <Footer onFilterClick={filter => this.setFilter(filter)}/>
      </div>
    )
  }
}

export default TodoApp
