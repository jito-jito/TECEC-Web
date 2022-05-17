import React from 'react'
import './ContactItem.scss'

function ContactItem ({
  title,
  items,
  icons
}) {
  return (
    <>
      <article className='contactItem'>
        <h2>{title}</h2>
        {items}
        <div className='contactItem-iconsContainer'>
          {icons}
        </div>
      </article>
    </>
  )
}

export { ContactItem }
