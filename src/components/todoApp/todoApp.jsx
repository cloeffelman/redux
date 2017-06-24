import React from 'react'

import VisibleTodoList from '../todoList/visibleTodoList'
import {AddTodo} from '../addTodo/addTodo'
import {Footer} from '../footer/footer'

require('./todo-app.scss')

const TodoApp = () => (
  <div id="todo-app">
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export {TodoApp}
