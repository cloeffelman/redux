import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {todos} from '../reducers/todosReducer'
import {visibilityFilter} from '../reducers/visibilityFilterReducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default createStore(todoApp, composeWithDevTools())
