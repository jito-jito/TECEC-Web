import React from 'react'
import './ServiceItem.scss'

function ServiceItem ({
  children
}) {
  return (
    <>
      <article className='serviceItem'>
        {children}
      </article>
    </>
  )
}

export { ServiceItem }
