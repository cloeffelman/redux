import React from 'react'
import {FilterLink} from '../filterLink/filterLink'

const Footer = ({onFilterClick}) => (
  <div className='footer'>
    <FilterLink onClick={() => onFilterClick('SHOW_ALL')} >All</FilterLink>
    <FilterLink onClick={() => onFilterClick('SHOW_ACTIVE')}>Active</FilterLink>
    <FilterLink onClick={() => onFilterClick('SHOW_COMPLETED')}>Completed</FilterLink>
  </div>
)

export {Footer}
