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

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'name':
        setFormData({
          ...formData,
          name: e.target.value
        })
        break
      case 'email':
        setFormData({
          ...formData,
          email: e.target.value
        })
        break
      case 'issue':
        setFormData({
          ...formData,
          issue: e.target.value
        })
        break
      case 'message':
        setFormData({
          ...formData,
          message: e.target.value
        })
        break
      default:
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formBody = ` form-name: contact
      new message from ${formData.name}
      email: ${formData.email}
      issue: ${formData.issue}
      message: ${formData.message}
    `

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeURIComponent(formBody),
      })

      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`)
      }
      alert("Form successfully submitted")
    } catch (error) {
      alert(error)
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
      </form>
    </>
  )
}

export { ContactForm }
