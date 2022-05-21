import React, { useState } from 'react'
import { Button } from '../../Commons/Button/Button'
import { Input } from '../../Commons/Input/Input'
import './ContactForm.scss'

function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    message: ''
  })
  const [pageState, setPageState] = useState({
    loading: false,
    error: false,
    success: false
  })

  const handleChange = (e) => {
    setPageState({
      loading: false, 
      error: false,
      success: false
    })
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const areValidCredentials = () => {
    const hasIncompleted = Object.keys(formData)
      .some(key => formData[key].length === 0)
    if(hasIncompleted) {
      throw new Error('Completa todos los campos')
    }

    const isValidEmail = formData.email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if(!isValidEmail) {
      throw new Error('Ingresa un email válido')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      areValidCredentials()
      setPageState({...pageState, loading: true})
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": 'contact',
          ...formData,
        }),
      })

      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`)
      }
      setPageState({
        ...pageState, 
        loading: false, 
        error: false,
        success: 'Gracias por contactarte con nosotros!, responderemos a la brevedad'
      })
    } catch (error) {
      setPageState({
        loading: false,
        error: `${error.message}`,
        success: false
      })
    }
  }

  return (
    <>
      <form
        className='contactForm'
        onSubmit={handleSubmit}
      >
        <h2>Envíanos un mensaje</h2>
        <Input
          className='contactForm-input'
          title='Nombre'
          placeHolder='Tú nombre'
          type='text'
          onChange={handleChange}
          value={formData.name}
          name="name"
          id="name"
        />
        <Input
          className='contactForm-input'
          title='Correo electrónico'
          placeHolder='TúCorreo@algo.com'
          type='text'
          onChange={handleChange}
          value={formData.email}
          name="email"
          id="email"
        />
        <Input
          className='contactForm-input'
          title='Asunto'
          placeHolder='un tema importante'
          type='text'
          onChange={handleChange}
          value={formData.issue}
          name="issue"
          id="issue"
        />
        <label
          className='contactForm-inputMessage'
          htmlFor=''
        >
          <h4>Mensaje</h4>
          <textarea
            cols='15'
            rows='5'
            placeholder='Mensaje importante'
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="message"
          />
        </label>
        <Button
          className='contactForm-button'
          type="submit"
        >
          Enviar
        </Button>
        {pageState.loading && 
          <div class="loading spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
        {pageState.error && <p className='error'>{pageState.error}</p>}
        {pageState.success && <p className='success'>{pageState.success}</p>}
      </form>
    </>
  )
}

export { ContactForm }
