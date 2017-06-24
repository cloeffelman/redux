import React from 'react'

import {Todo} from '../todo/todo'

const TodoList = ({todos, onTodoClick, visibilityFilter}) => {
  if(todos.length === 0) return null
  todos = todos.map(todo =>
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

export {TodoList}
