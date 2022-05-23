import React from 'react'
import { Button } from '../Commons/Button/Button'
import './Hero.scss'

function Hero () {
  return (
    <>
      <section className='hero'>
        <div className='hero-container'>
          <h1 className='hero-title'>
            Comprometidos en entregar un buen servicio
          </h1>
          <div className='hero-buttons'>
            <a href='#experiencia'>
              <Button
                className='hero-button'
              >
                Nuestra experiencia
              </Button>
            </a>
            <a href='#contacto'>
              <Button
                className='hero-button'
              >
                Quiero contactar
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export { Hero }
