import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

import todoAppStore from './store/todoAppStore'
import {TodoApp} from './components/todoApp/todoApp'

Provider.childContextTypes = {
  store: PropTypes.object,
  storeSubscription: PropTypes.func
}

ReactDOM.render(
  <Provider store={todoAppStore}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
)
