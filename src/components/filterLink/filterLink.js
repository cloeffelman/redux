import React from 'react'

const FilterLink = ({onClick, children}) => {
  return(
    <div onClick={onClick}>
      {children}
    </div>
  )
}

export {FilterLink}
