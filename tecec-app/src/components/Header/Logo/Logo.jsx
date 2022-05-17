import React from 'react'
import LogoIcon from '../../../assets/images/header/logo/logo_cropped.png'
import './Logo.scss'

function Logo () {
  return (
    <>
      <label
        className='logo'
        htmlFor=''
      >
        <figure className='logo-image'>
          <img src={LogoIcon} alt='' />
        </figure>
        <h5 className='logo-title'>TECEC Servicios</h5>
      </label>
    </>
  )
}

export { Logo }
