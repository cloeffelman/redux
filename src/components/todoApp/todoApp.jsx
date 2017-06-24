import React, {Component} from 'react'

import VisibleTodoList from '../todoList/visibleTodoList'
import {AddTodo} from '../addTodo/addTodo'
import {Footer} from '../footer/footer'

require('./todo-app.scss')

let nextTodoId = 0
class TodoApp extends Component {
  render(){
    return(
      <div id="todo-app">
        <AddTodo store={this.props.store}/>
        <VisibleTodoList store={this.props.store}/>
        <Footer store={this.props.store}/>
      </div>
    )
  }
}

export default TodoApp
