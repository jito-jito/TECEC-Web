import React from 'react'
import { Title } from 'components/Commons/Title/Title'
import { ContactItem } from './ContactItem/ContactItem'
import { Icon } from 'components/Commons/Icon/Icon'
import { ContactForm } from './ContactForm/ContactForm'
import './Contact.scss'

const contactData = [
  {
    title: 'Llámanos',
    items: ['+569 35805401', '+569 46541829', 'tececservicios@gmail.com']
  },
  {
    title: 'En la Web',
    icons: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/tecec-servicios/'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/tecec.servicios/'
      }
    ]
  },
  {
    title: 'Sobre Tecec',
    items: ['Trabajamos a los alrededores de todo Santiago, consulte por regiones.']
  }
]

function Contact () {
  return (
    <>
      <section className='contact' id='contacto'>
        <Title className='contact-title'>Contactanos</Title>
        <section className='contact-container'>
          <div className='contact-itemsContainer'>
            {
              contactData.map(data => {
                return (
                  <ContactItem
                    key={data.title}
                    title={data.title}
                    items={
                      data.items?.map(item => {
                        return (
                          <p key={item} className='contactItem-item'>{item}</p>
                        )
                      })
                    }
                    icons={
                      data.icons?.map(iconData =>
                        <a
                          key={iconData.name}
                          href={iconData.url}
                        >
                          <Icon
                            className='contactItem-icon'
                            iconName={iconData.name}
                          />
                        </a>
                      )
                    }
                  />
                )
              })
            }
          </div>
          <ContactForm />
        </section>
      </section>
    </>
  )
}

export { Contact }
