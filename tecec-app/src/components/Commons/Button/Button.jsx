import React from 'react'
import './Button.scss'

function Button ({
  className,
  type,
  onClick,
  children
}) {
  return (
    <>
      <button 
        className={`button ${className}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export { Button }
