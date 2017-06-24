const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: Math.random(0, 100000000),
    text
  }
}

const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export {addTodo, toggleTodo}
