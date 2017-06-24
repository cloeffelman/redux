import React from 'react'
import FilterLink from '../filterLink/filterLink'

const Footer = ({store}) => (
  <div className='footer'>
    <FilterLink store={store} filter='SHOW_ALL'>All</FilterLink>
    <FilterLink store={store} filter='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink store={store} filter='SHOW_COMPLETED'>Completed</FilterLink>
  </div>
)

export {Footer}