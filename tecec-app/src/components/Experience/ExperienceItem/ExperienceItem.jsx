import React from 'react'
import './ExperienceItem.scss'

function ExperienceItem ({
  children
}) {
  return (
    <>
      <article className='experienceItem'>
        {children}
      </article>
    </>
  )
}

export { ExperienceItem }
