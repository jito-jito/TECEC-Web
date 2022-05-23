import React from 'react'
import { Title } from 'components/Commons/Title/Title'
import { ServiceItem } from './ServiceItem/ServiceItem'
import { Icon } from '../Commons/Icon/Icon'
import './Services.scss'

const servicesData = [
  {
    title: 'Dibujo y modificación',
    subTitle: 'Autocad 2d y 3d',
    description: 'Servicios de dibujo y confección de planos según las especificaciones definidas en tu proyecto, de acuerdo a las normativas de dibujo y diseño actuales.',
    iconName: 'cad'
  },
  {
    title: 'Proyectos e Instalaciones',
    subTitle: 'Industriales y domiciliarias',
    description: 'Estamos capacitados para elaborar tu proyecto desde la ingeniería y ejecución hasta la certificación ante las entidades correspondientes',
    iconName: 'proyectos'
  },
  {
    title: 'Tableros Eléctricos',
    subTitle: 'CCM, VDF, partidores suaves, Celdas MT',
    description: 'Integración de tableros de distribución, fuerza, centro de control de motores, partidores suaves, celdas de media tensión, variadores de frecuencia y switchgear',
    iconName: 'tablero'
  },
  {
    title: 'Certificación de planos/documentos',
    subTitle: 'Autocad 2d y 3d',
    description: 'Ofrecemos asesoria y apoyo para certificaciones ante la SEC, revisamos, comentamos, corregimos y validamos proyectos, planos o documentos técnicos',
    iconName: 'certificación'
  }
]

function Services () {
  return (
    <>
      <section className='services' id='servicios'>
        <Title className='services-title'>Nuestros Servicios</Title>
        <div className='services-itemsContainer'>
          {servicesData.map(service => {
            return (
              <ServiceItem key={service.iconName}>
                <Icon iconName={service.iconName} />
                <h3 className='serviceItem-title'>{service.title}</h3>
                <h4 className='serviceItem-subTitle'>{service.subTitle}</h4>
                <p className='serviceItem-description'>{service.description}</p>
              </ServiceItem>
            )
          })}
        </div>
      </section>
    </>
  )
}

export { Services }
