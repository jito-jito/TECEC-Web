import React from 'react'
import { Title } from 'components/Commons/Title/Title'
import { HoldingItem } from './HoldingItem/HoldingItem'
import { Image } from 'components/Commons/Image/Image'
import './Mision.scss'

const holdingData = [
  {
    title: 'Excelencia',
    description: 'Nos enfocamos en mejorar continuamente basándonos en el desarrollo de nuestras habilidades profesionales para un buen manejo técnico, garantizando el mejor desarrollo junto a nuestros clientes.',
    image: 'holding'
  },
  {
    title: 'Calidad',
    description: 'Procuramos entregar un servicio de calidad, seguro y confiable no solo por los estándares establecidos por las normas si no que considerando además las opiniones de nuestros clientes.',
    image: 'holding'
  },
  {
    title: 'Compromiso',
    description: 'Tenemos un compromiso ético con el desarrollo y entrega de nuestros servicios, velamos por la seguridad entregando un trabajo seguro, con un estándar que se adapta a las necesidades de nuestros clientes.',
    image: 'holding'
  }
]

function Mision () {
  return (
    <>
      <section className='mision' id='nosotros'>
        <div className='mision-container'>
          <Title>Mision/Vision</Title>
          <p className='mision-description'>
            Tenemos la misión de entregar un servicio integral a nuestros clientes, mejorando continuamente basándonos en la identificación de sus necesidades específicas.
            Por ello como organización trabajamos duro en nuestro desarrollo profesional, para entregar un servicio ante todo seguro, que cumpla con las normativas vigentes, sea de calidad y eficaz.
            También nos capacitamos para mejorar nuestras mejores virtudes basadas en el desarrollo profesional y tecnológico, estimulando la proactividad al igual que el desarrollo de nuevas ideas, para consolidar una relación positiva con nuestros clientes basada en la confianza, compromiso y profesionalismo.
          </p>
          <div className='mision-itemsContainer'>
            {
              holdingData.map(holding => {
                return (
                  <HoldingItem key={holding.title}>
                    <Image imageName={holding.image} />
                    <h5>{holding.title}</h5>
                    <p>{holding.description}</p>
                  </HoldingItem>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export { Mision }
