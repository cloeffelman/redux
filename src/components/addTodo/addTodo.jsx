import React from 'react'
import {connect} from 'react-redux'

let AddTodo = ({dispatch}) => {
  let input, button
  return(
    <div className='add-todo'>
      <input
        ref={node => {input = node}}
        onKeyPress={e => e.key === 'Enter' ? button.click() : null}
        className='add-todo-input'/>
      <button
        ref={node => {button = node}}
        className='add-todo-button'
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            id: Math.random(0, 100000000),
            text: input.value
          })
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
