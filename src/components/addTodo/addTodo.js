import React from 'react'

const AddTodo = ({onAddClick}) => {
  let input
  return(
    <div>
      <input ref={node => {input = node}} onKeyPress={(e) => {if(e.key === 'Enter') document.getElementById('add-todo').click()}}/>
      <button
      id='add-todo'
        onClick={() => {onAddClick(input.value); input.value = ''}}>
        Add Todo
      </button>
    </div>
  )
}

export {AddTodo}
