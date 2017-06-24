import React from 'react'

import {Todo} from '../todo/todo'

const TodoList = ({todos, onTodoClick, visibilityFilter}) => {
  if(todos.length === 0) return null
  todos = getVisibleTodos(todos, visibilityFilter).map(todo =>
    <Todo
      key={todo.id}
      onClick={() => {onTodoClick(todo.id)}}
      completed={todo.completed}
      text={todo.text} />
  )

  return(
    <ul className='todos'>{todos}</ul>
  )
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

export {TodoList}
