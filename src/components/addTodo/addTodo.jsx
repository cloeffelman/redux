import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../../actions/todoActions'

let AddTodo = ({dispatch}) => {
  let input, button
  return(
    <div className='add-todo'>
      <input
        ref={node => {input = node}}
        onKeyPress={e => e.key === 'Enter' ? button.click() : null}
        className='add-todo-input'
        placeholder='Enter something to do'/>
      <button
        ref={node => {button = node}}
        className='add-todo-button'
        onClick={() => {
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export {AddTodo}
