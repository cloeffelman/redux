import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {todos} from '../reducers/todos'
import {visibilityFilter} from '../reducers/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default createStore(todoApp, composeWithDevTools())
