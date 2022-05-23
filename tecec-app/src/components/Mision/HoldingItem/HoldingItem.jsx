import React from 'react'
import './HoldingItem.scss'

function HoldingItem ({
  children
}) {
  return (
    <>
      <article className='holdingItem'>
        {children}
      </article>
    </>
  )
}

export { HoldingItem }
