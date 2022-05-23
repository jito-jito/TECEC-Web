import React from 'react'
import './Title.scss'

function Title ({
  className,
  children
}) {
  return (
    <h1 className={`${className} title`}>{children}</h1>
  )
}

export { Title }
