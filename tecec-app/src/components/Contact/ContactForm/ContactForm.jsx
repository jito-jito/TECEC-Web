import React from 'react'
import { Button } from '../../Commons/Button/Button'
import { Input } from '../../Commons/Input/Input'
import './ContactForm.scss'

function ContactForm () {
  return (
    <>
      <form
        className='contactForm'
        action=''
      >
        <h2>Envíanos un mensaje</h2>
        <Input
          className='contactForm-input'
          title='Nombre'
          placeHolder='Tú nombre'
          type='text'
        />
        <Input
          className='contactForm-input'
          title='Correo electrónico'
          placeHolder='TúCorreo@algo.com'
          type='text'
        />
        <Input
          className='contactForm-input'
          title='Asunto'
          placeHolder='un tema importante'
          type='text'
        />
        <label
          className='contactForm-inputMessage'
          htmlFor=''
        >
          <h4>Mensaje</h4>
          <textarea
            name=''
            id=''
            cols='15'
            rows='5'
            placeholder='Mensaje importante'
          />
        </label>
        <Button
          className='contactForm-button'
        >
          Enviar
        </Button>
      </form>
    </>
  )
}

export { ContactForm }
