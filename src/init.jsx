import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import todoAppStore from './store/todoAppStore'

import TodoApp from './components/todoApp/todoApp'

const render = () => {
  ReactDOM.render(<TodoApp {...todoAppStore.getState()} store={todoAppStore}/>, document.getElementById('root'))
}

todoAppStore.subscribe(render)
render()
