import React from 'react'
import './Button.scss'

function Button ({
  className,
  children
}) {
  return (
    <>
      <button className={`button ${className}`}>
        {children}
      </button>
    </>
  )
}

export { Button }
