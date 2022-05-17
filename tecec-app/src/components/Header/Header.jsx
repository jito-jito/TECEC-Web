import React from 'react'
import { Logo } from './Logo/Logo'
import { Menu } from './Menu/Menu'
import './Header.scss'

function Header () {
  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <Logo />
          <Menu />
        </div>
      </header>
      <div className='header-box' />
    </>
  )
}

export { Header }
