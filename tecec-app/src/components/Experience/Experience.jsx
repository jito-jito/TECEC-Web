import React from 'react'
import { Title } from 'components/Commons/Title/Title'
import { ExperienceItem } from './ExperienceItem/ExperienceItem'
import { Image } from '../Commons/Image/Image'
import './Experience.scss'

const experiencesData = [
  {
    title: 'Ingeniería, confección de planos',
    subTitle: 'Proyecto túnel el melon',
    date: 'Fecha: 18-02-2020',
    description: 'Ingeniería y confección de planos de tableros en BT para futuro Proyecto Túnel el Melón, en apoyo a uno de nuestros clientes especializados en el área de integración eléctrica.',
    image: 'exp1'
  },
  {
    title: 'Instalación domiciliaria',
    subTitle: 'Proyecto Paine',
    date: 'Fecha: 10-03-2020',
    description: 'Proyección, Instalación Y Certificación eléctrica. Proyecto embutido en placas arquitectónicas Covintec, realizando Supervisión durante toda la obra, con un estricto protocolo.',
    image: 'exp2'
  },
  {
    title: 'Instalación domiciliaria',
    subTitle: 'Proyecto Pirque',
    date: 'Fecha: 04-05-2020',
    description: 'Proyección e Instalación eléctrica embutida en Metalcom, obra fina. Basándonos en la distribución con altos estándares de calidad y seguridad. Contamos con el respaldo de la completa satisfacción avalada por nuestros clientes.',
    image: 'exp3'
  },
  {
    title: 'Remodelación y estetica',
    subTitle: 'Proyecto Pirque',
    date: 'Fecha: 04-05-2020',
    description: 'Remodelación completa en cocina ubicada en Paine, cumpliendo con las normativas y requerimientos esenciales para entregar el mejor desarrollo de cada proyecto.',
    image: 'exp4'
  },
  {
    title: 'Iluminacion Solar',
    subTitle: 'Proyecto Las Condes',
    date: 'Fecha: 15-07-2020',
    description: 'Instalación y edificación de postes solares para estacionamiento de condominio ubicado en la comuna de las Condes. Innovando la eficiencia energética para entregar la mejor calidad anuetros clientes.',
    image: 'exp5'
  }
]
function Experience () {
  return (
    <>
      <section className='experience' id='experiencia'>
        <Title className='experience-title'>Experiencia</Title>
        <div className='experience-itemsContainer'>
          {experiencesData.map(experience => {
            return (
              <ExperienceItem key={experience.image}>
                <Image imageName={experience.image} />
                <div className='experienceItem-data'>
                  <h3 className='experienceItem-title'>{experience.title}</h3>
                  <h3 className='experienceItem-subTitle'>{experience.subTitle}</h3>
                  <h5 className='experienceItem-date'>{experience.date}</h5>
                  <p className='experienceItem-description'>{experience.description}</p>
                </div>
              </ExperienceItem>
            )
          })}
        </div>
      </section>
    </>
  )
}

export { Experience }
