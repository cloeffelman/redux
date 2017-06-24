import React, {Component} from 'react'

import {Link} from './link'

class FilterLink extends Component {
  constructor(props){
    super(props)
    this.setFilter = this.setFilter.bind(this)
  }
  componentDidMount(){
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  setFilter(filter){
    this.props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  }
  render(){
    const props = this.props
    const state = this.props.store.getState()
    return(
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() => this.setFilter(props.filter)}>
        {props.children}
      </Link>
    )
  }
}

export default FilterLink
