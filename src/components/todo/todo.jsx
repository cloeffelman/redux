import React from 'react'
import classNames from 'classnames'

const Todo = ({onClick, completed, text}) => (
  <li
    className={classNames('todo', {'completed': completed})}
    onClick={onClick}>
    {text}
  </li>
)

export {Todo}
