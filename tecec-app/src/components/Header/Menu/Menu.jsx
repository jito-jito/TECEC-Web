import React, { useEffect, useState } from 'react'
import './Menu.scss'
import pageData from '../../../content/config.json'

function Menu () {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    return open ? 'open' : 'close'
  }

  useEffect(() => {
    function closeMenu () {
      if (open) {
        setOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)

    return function cleanUp () {
      document.removeEventListener('click', closeMenu)
    }
  }, [open])

  return (
    <>
      <nav className='menu'>
        <div className='menu-dropdown'>
          <input
            className='menu-dropdownButton'
            type='button'
            onClick={() => setOpen(prev => !prev)}
          />
          <ul className={`menu-itemsContainer ${toggleMenu()}`}>
            {pageData.nav_links.map(link => (
              <li key={link.name} className='menu-item'><a href={`#${link.target}`}>{link.name}</a></li>
            ))}
          </ul>
        </div>
        <ul className='desktop menu-itemsContainer'>
          {pageData.nav_links.map(link => (
            <li key={link.name} className='menu-item'><a href={`#${link.target}`}>{link.name}</a></li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export { Menu }
