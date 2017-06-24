import React, {Component} from 'react'

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }
  addTodo(){
    if(this.refs.input.value === '') return null
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: this.refs.input.value,
      id: Math.random(0, 1000000)
    })
    this.refs.input.value = ''
  }
  onKeyPress(e){
    if(e.key === 'Enter') this.refs.button.click()
  }
  render(){
    let input
    return(
      <div className='add-todo'>
        <input ref='input' className='add-todo-input' onKeyPress={this.onKeyPress}/>
        <button
          ref='button'
          className='add-todo-button'
          onClick={this.addTodo}
        >
          Add Todo
        </button>
      </div>
    )
  }
}

export {AddTodo}
