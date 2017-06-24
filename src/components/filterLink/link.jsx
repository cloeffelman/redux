import React from 'react'
import classNames from 'classnames'

const Link = ({active, onClick, children}) => (
  <div className={classNames('filter', {'active': active})} onClick={onClick}>
    {children}
  </div>
)

export {Link}
