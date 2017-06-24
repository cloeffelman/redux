import React from 'react'
import FilterLink from '../filterLink/filterLink'

const Footer = () => (
  <div className='footer'>
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
  </div>
)

export {Footer}
