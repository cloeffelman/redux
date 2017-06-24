import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import todoAppStore from './store/todoAppStore'
import TodoApp from './components/todoApp/todoApp'

ReactDOM.render(
  <TodoApp store={todoAppStore}/>,
  document.getElementById('root')
)
